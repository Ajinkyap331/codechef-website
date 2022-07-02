import React, { useState, useRef } from 'react'
import { loginG } from '../Config/DB';
import { useParams } from 'react-router-dom';
import { db } from '../Config/DB';
import { useNavigate } from 'react-router-dom';

export const Feedback = () => {
  let navigate = useNavigate()
  const { id } = useParams();

  const rating = useRef()
  const suggest = useRef()
  const pnumber = useRef()

  const [user, setuser] = useState(false)
  const [avail, seta] = useState(true)

  const HandleLogin = () => {
    loginG(setuser)
  }

  const SendFeedback = () => {
    const data = {
      name: user.displayName,
      email: user.email,
      rating: rating.current.value,
      suggest: suggest.current.value,
      pnumber : pnumber.current.value
    }
    db.collection("feedback").doc(id).collection("user").doc(user.email).set(data).then(() => navigate('/'))
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
      {
        avail ? <>
          {user && Register}
          {!user && <button onClick={() => HandleLogin()}>Login</button>}
        </> : <>
          Sorry, The Registration are Closed!!!
        </>
      }
    </div>
  )
}
