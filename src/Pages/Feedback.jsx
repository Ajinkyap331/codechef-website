import React, { useState, useRef, useEffect } from 'react'
import { loginG } from '../Config/DB';
import { useParams } from 'react-router-dom';
import { db } from '../Config/DB';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Feedback = () => {
  let navigate = useNavigate()
  const { id } = useParams();

  const rating = useRef()
  const suggest = useRef()
  const pnumber = useRef()

  const [eventData, seteventData] = useState(false)
  const [user, setuser] = useState(false)
  const [avail, seta] = useState("")

  useEffect(() => {
    db.collection("events").doc(id).get().then(doc => {
      if (!doc.exists) {
        toast.error("No Such Event Exists !", {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => navigate("/events"),
        })
        seta("")
      }
      else {
        seteventData(doc.data())
        if (doc.data().upcoming) {
          toast.error("Feeback From is Closed ! Try Again Later !!!", {
            position: toast.POSITION.TOP_CENTER,
            onClose: () => navigate("/events"),
          })
        }
        else seta("Yes")
      }
    })
  }, [id, navigate])

  const HandleLogin = () => {
    loginG(setuser)
  }

  const SendFeedback = () => {
    if(rating.current.value > 5 || rating.current.value <= 0){
      toast.error(" Rating is Invalid !!!", {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    if(suggest.current.value === ''){
      toast.error(" Suggestion Cannot be Empty !!!", {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    if(pnumber.current.value.length !== 10){
      toast.error(" Number is Invalid !!!", {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    const data = {
      name: user.displayName,
      email: user.email,
      rating: rating.current.value,
      suggest: suggest.current.value,
      pnumber: pnumber.current.value
    }
    db.collection("feedback").doc(id).collection("user").doc(user.email).set(data).then(() => toast.success("Feedback Send !", {
      position: toast.POSITION.TOP_CENTER,
      onClose: () => navigate('/events')
    }))
  }

  const Feedback =
    <div className='feedback'>
      <div>Name : {user.displayName}</div>
      <div>Event Name : {eventData.name}</div>
      <div>Email : {user.email}</div>
      <div>How was the Event(1 to 5) : <input ref={rating} type="number" min="0" max="5" ></input>
      </div>
      <div>Suggestion : <input ref={suggest}></input></div>
      <div>Phone Number : <input ref={pnumber} type="tel" ></input> </div>
      <button className = "feedback-btn-event" onClick={() => SendFeedback()} >Send Feedback</button>
    </div>

  return (
    <div>
      <ToastContainer />
      {
        avail === "Yes" && <>
          {user && Feedback}
          {!user && <div className='login-btn'><button onClick={() => HandleLogin()}>Login</button></div>}
        </>
      }
    </div>
  )
}
