import React, { useEffect, useState, useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Config/DB";
import { Admin } from "./Admin";
import '../Styles/Login.css';

export const Login = () => {
  const [LoggedIn, SetLoggedIn] = useState("loggedout");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  const Error = (
    <div className="login">
      <input
        type="text"
        name="userName"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <p>Invalid UserName or Password</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

  const LoginJSX = (
    <div className="login">
      <input type="text" name="userName" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );

  return (
    <div className="body">
      <h1>Admin Login</h1>
      {LoggedIn === "error" && Error}
      {LoggedIn === "loggedout" && LoginJSX}
      {LoggedIn === "loggedin" && <Admin sl={SetLoggedIn} />}
    </div>
  );
};
