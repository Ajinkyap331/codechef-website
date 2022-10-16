import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/login-slice";
import { loginG, logoutG } from "../Config/DB";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../Config/DB";

export const ULogin = () => {
  let login = useSelector((state) => state.login);
  const [_login, setlogin] = useState(login);
  const [cert, setcert] = useState([]);

  useEffect(() => {
    if (_login === "logout") {
      dispatch(
        loginAction.addLogin({
          key: -1,
          photoURL: -1,
          displayName: -1,
          email: -1,
        })
      );
      document.cookie = `email=${-1}`;
      document.cookie = `key=${-1}`;
      document.cookie = `photoURL=${-1}`;
      document.cookie = `displayName=${-1}`;
      setcert([]);
    } else if (_login.email !== -1) {
      dispatch(
        loginAction.addLogin({
          key: _login.key,
          photoURL: _login.photoURL,
          displayName: _login.displayName,
          email: _login.email,
        })
      );

      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = `key=${_login.key};expires=${d.toUTCString()}`;
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
            Login
          </button>
        )}
        {login.email !== -1 && (
          <>
            Hello {login.displayName}
            <button
              onClick={() => {
                logoutG(setlogin);
              }}
            >
              Logout
            </button>
            Certificates
            {cert !== [] &&
              cert.map((e) => {
                return (
                  <a
                    className="certificate-download"
                    href={e}
                    target="_blank"
                    rel="noreferrer"
                  >
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
