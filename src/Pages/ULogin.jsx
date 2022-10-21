import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/login-slice";
import { loginG, logoutG } from "../Config/DB";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { db } from "../Config/DB";
import "../Styles/ULogin.css";
import Google from "../Images/google.svg";

export const ULogin = () => {
  const navigate = useNavigate();
  let login = useSelector((state) => state.login);
  console.log(login);
  const [_login, setlogin] = useState(login);
  const [cert, setcert] = useState([]);

  useEffect(() => {
    if (_login === "logout") {
      dispatch(
        loginAction.addLogin({
          photoURL: -1,
          displayName: -1,
          email: -1,
        })
      );
      document.cookie = `email=${-1}`;
      document.cookie = `photoURL=${-1}`;
      document.cookie = `displayName=${-1}`;
      setcert([]);
    }
    // console.log(_login.email)
    else if (_login.email !== -1) {
      dispatch(
        loginAction.addLogin({
          photoURL: _login.photoURL,
          displayName: _login.displayName,
          email: _login.email,
        })
      );

      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = `email=${_login.email};expires=${d.toUTCString()}`;
      document.cookie = `photoURL=${
        _login.photoURL
      };expires=${d.toUTCString()}`;
      document.cookie = `displayName=${
        _login.displayName
      };expires=${d.toUTCString()}`;

      db.collection("users")
        .doc(_login.email)
        .collection("Certificates")
        .doc("all")
        .get()
        .then((e) => {
          setcert(e.data().Array);
        });
    }

    // if (_login === "") {
    //   dispatch(
    //     loginAction.addLogin({
    //       photoURL: -1,
    //       displayName: -1,
    //       UID: -1,
    //       email: -1,
    //     })
    //   );
    // } else {
    //   dispatch(
    //     loginAction.addLogin({
    //       photoURL: _login.photoURL,
    //       displayName: _login.displayName,
    //       UID: _login.UID,
    //       email: _login.email,
    //     })
    //   );
    // }

    // if (_login.email !== -1) {
    //   console.log(

    //   );
    // }
    // document.cookie = `photoURL= ${login.photoURL}`
    // document.cookie = `username= ${login.displayName}`
    // document.cookie = `UID= ${login.uid}`
    // document.cookie = `email= ${login.email}`
  }, [_login]);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="login-btn">
        {login.email === -1 && (
          <button
            onClick={() => {
              loginG(setlogin);
            }}
          >
            <img src={Google} width="20px" height="20px" /> Login with Google
          </button>
        )}
        {login.email !== -1 && (
          <>
            <h1>Hello, {login.displayName}</h1>
            <button
              onClick={() => {
                logoutG(setlogin);
              }}
            >
              Logout
            </button>
            Certificates
            {/* {console.log(_login)} */}
            {cert !== [] &&
              cert.map((e) => {
                return (
                  <a className="certificate-download" href={e} target="_blank">
                    Download Certificate
                  </a>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};
