import React, { useEffect, useState, useRef } from 'react'
import { login } from '../Config/DB'
import { Admin } from './Admin'
export const Login = () => {

  const [LoggedIn, SetLoggedIn] = useState("loggedout");
  // const [LoggedIn, SetLoggedIn] = useState("loggedin");



  useEffect(() => {
    if (localStorage.getItem("user") === "XuO#hyN#SeF#TDd$EmU8cW!PK0BxcUBh")
      SetLoggedIn("loggedin")
  }, [])

  const username = useRef();
  const password = useRef();

  const HandleLogin = () => {
    login(username.current.value, password.current.value, SetLoggedIn)
    localStorage.setItem("user", "XuO#hyN#SeF#TDd$EmU8cW!PK0BxcUBh")
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
