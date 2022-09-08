import React, { useState, useRef, useEffect } from "react";
import { loginG } from "../Config/DB";
import { db } from "../Config/DB";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Suggestion = () => {
  let navigate = useNavigate();
  let login = useSelector((state) => state.login);

  useEffect(() => {
    if (login.email === -1) {
      navigate("/login");
    }
  }, []);

  const sendSuggestion = () => {
    const data = {
      name: login.username,
      email: login.email,
      suggest: suggest.current.value,
    };
    db.collection("suggest")
      .doc("user")
      .collection(login.email)
      .doc(Date.parse(new Date()).toString())
      .set(data)
      .then(() =>
        toast.success("Suggestion Send Success !", {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => navigate("/"),
        })
      );
  };

  const suggest = useRef();
  const Suggest = (
    <>
      <div className="feedback">
        <div>Name : {login.username}</div>
        <div>Email : {login.email}</div>
        <div>
          <div>Suggestion :</div>{" "}
          <textarea rows={5} cols={25} ref={suggest}></textarea>
        </div>
        <button className="feedback-btn-event" onClick={() => sendSuggestion()}>
          Suggest This !!!
        </button>
      </div>
    </>
  );

  return (
    <>
      <ToastContainer />
      {login.email !== -1 && Suggest}
    </>
  );
};
