import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/login-slice";
import { loginG, logoutG } from "../Config/DB";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ULogin = () => {
  const navigate = useNavigate();
  let login = useSelector((state) => state.login);
  const [_login, setlogin] = useState(login);

  useEffect(() => {
    if (_login === "") {
      dispatch(
        loginAction.addLogin({
          photoURL: -1,
          displayName: -1,
          UID: -1,
          email: -1,
        })
      );
    } else
      dispatch(
        loginAction.addLogin({
          photoURL: _login.photoURL,
          displayName: _login.displayName,
          UID: _login.UID,
          email: _login.email,
        })
      );

    // document.cookie = `photoURL= ${login.photoURL}`
    // document.cookie = `username= ${login.displayName}`
    // document.cookie = `UID= ${login.uid}`
    // document.cookie = `email= ${login.email}`
  }, [_login]);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="login-btn">
        {/* <div>Login Here</div> */}
        {login.email === -1 && (
          <button
            onClick={() => {
              loginG(setlogin);
            }}
          >
            Login
          </button>
        )}
        {login.email !== -1 && (
          <button
            onClick={() => {
              logoutG(setlogin);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
