import React, { useEffect, useState, useRef } from 'react'
import { db } from '../Config/DB'
import { login } from '../Config/DB'
import { Admin } from './Admin'
export const Login = () => {

  const [LoggedIn, SetLoggedIn] = useState("loggedout");
  useEffect(() => {
    // db.collection("cities").doc("LA").set({
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
    // console.log(logindetails)
  }, [])

  const username = useRef();
  const password = useRef();

  const HandleLogin = () => {
    login(username.current.value, password.current.value, SetLoggedIn)
  }

  const Error =
    <div className='login'>
      <p>Invalid UserName and Password</p>
      <p  >UserName : </p>
      <input ref={username} />
      <p >Password : </p>
      <input ref={password} />
      <button onClick={HandleLogin}>Login</button>
    </div>
  const LoginJSX =
    <div className='login'>
      <p  >UserName : </p>
      <input ref={username} />
      <p >Password : </p>
      <input ref={password} />
      <button onClick={HandleLogin}>Login</button>
    </div>


  return (
    <>
      {LoggedIn === "error" && Error}
      {LoggedIn === "loggedout" && LoginJSX}
      {LoggedIn === "loggedin" && <Admin sl={SetLoggedIn} />}
    </>
  )
}
