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
      console.log(doc.exists)
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
  }, [])

  const HandleLogin = () => {
    loginG(setuser)
  }

  const SendFeedback = () => {
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

  const Register =
    <>
      <div>Name : {user.displayName}</div>
      <div>Email : {user.email}</div>
      <div>How was the Event(1 to 5) :
        <input ref={rating} type="number" min="0" max="5" ></input>
      </div>
      <div>Suggestion : <input ref={suggest}></input></div>
      <div>Phone Number : <input ref={pnumber} type="tel" ></input> </div>
      <button onClick={() => SendFeedback()} >Send Feedback</button>
    </>

  return (
    <div>
      <ToastContainer />
      {
        avail === "Yes" && <>
          {user && Register}
          {!user && <button onClick={() => HandleLogin()}>Login</button>}
          <ToastContainer />
        </>
      }
    </div>
  )
}
