import React, { useState, useRef } from 'react'
import { loginG } from '../Config/DB'
import { db } from '../Config/DB'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export const Suggestion = () => {
  let navigate = useNavigate()
  const [user, setuser] = useState(false)

  const sendSuggestion = () => {
    const data = {
      name: user.displayName,
      email: user.email,
      suggest: suggest.current.value,
    }
    db.collection("suggest").doc("user").collection(user.email).doc(Date.parse(new Date).toString()).set(data).then(() => toast.success("Suggestion Send Success !", {
      position: toast.POSITION.TOP_CENTER,
      onClose: () => navigate('/')
    }))
  }

  const suggest = useRef()
  const Suggest = <>
    <div className='feedback'>
      <div>Name : {user.displayName}</div>
      <div>Email : {user.email}</div>
      <div><div>Suggestion :</div> <textarea rows={5} cols={25} ref={suggest}></textarea></div>
      <button className="feedback-btn-event" onClick={() => sendSuggestion()} >Suggest This !!!</button>
    </div>
  </>

  return (
    <>
      <ToastContainer />
      {user && Suggest}
      {
        !user && <div className='login-btn'><div>You need to Login Before Giving Any Suggestions !!!</div> <button onClick={() => loginG(setuser)}>Login</button></div>
      }
    </>

  )
}
