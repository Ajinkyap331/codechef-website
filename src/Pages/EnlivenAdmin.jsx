import React, { useState, Fragment, useRef, useEffect } from "react";
import { db } from "../Config/DB";
import "../Styles/EnlivenAdmin.css";
import validator from "validator";
import useInput from "../hooks/use-input";
import Modal from "../UI/Modal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const EnlivenAdmin = () => {

  let login = useSelector((state) => state.login);

  
  const [Message, setMessage] = useState("");
  const [check, setCheck] = useState(false);
  const week = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    if(login.email === "-1"){
        console.log("-1 hai")
        // navigate("/login");
    }
    else if(!login.email[0] == "a" && !login.email[1] == "j"){
        navigate("/")
    }
  }, [])  

  const {
    value: link1,
    isValid: link1IsValid,
    hasError: link1HasError,
    valueChangeHandler: link1ChangeHandler,
    valueChangeHandler1: link1ChangeValue,
    inputBlurHandler: link1BlurHandler,
    reset: resetLink1,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link2,
    isValid: link2IsValid,
    hasError: link2HasError,
    valueChangeHandler: link2ChangeHandler,
    valueChangeHandler1: link2ChangeValue,
    inputBlurHandler: link2BlurHandler,
    reset: resetLink2,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link3,
    isValid: link3IsValid,
    hasError: link3HasError,
    valueChangeHandler: link3ChangeHandler,
    valueChangeHandler1: link3ChangeValue,
    inputBlurHandler: link3BlurHandler,
    reset: resetLink3,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link4,
    isValid: link4IsValid,
    hasError: link4HasError,
    valueChangeHandler: link4ChangeHandler,
    valueChangeHandler1: link4ChangeValue,
    inputBlurHandler: link4BlurHandler,
    reset: resetLink4,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link5,
    isValid: link5IsValid,
    hasError: link5HasError,
    valueChangeHandler: link5ChangeHandler,
    valueChangeHandler1: link5ChangeValue,
    inputBlurHandler: link5BlurHandler,
    reset: resetLink5,
  } = useInput((value) => validator.isURL(value.trim()));

  const handleClick2 = () => {
    week.current.focus();
    db.collection("eliven")
      .doc("problem")
      .collection("weekly")
      .doc(week.current.value)
      .get()
      .then((e) => {
        setCheck(true);
        const values = e.data();
        link1ChangeValue(values === undefined ? "" : values[1]);
        link2ChangeValue(values === undefined ? "" : values[2]);
        link3ChangeValue(values === undefined ? "" : values[3]);
        link4ChangeValue(values === undefined ? "" : values[4]);
        link5ChangeValue(values === undefined ? "" : values[5]);
      });
  };

  const handleClick = () => {
    if (
      link1IsValid ||
      link2IsValid ||
      link3IsValid ||
      link4IsValid ||
      link5IsValid
    ) {
      db.collection("eliven")
        .doc("problem")
        .collection("weekly")
        .doc(week.current.value)
        .set({
          1: link1 === undefined ? "" : link1,
          2: link2 === undefined ? "" : link2,
          3: link3 === undefined ? "" : link3,
          4: link4 === undefined ? "" : link4,
          5: link5 === undefined ? "" : link5,
        })
        .then(() => {
          resetLink1();
          resetLink2();
          resetLink3();
          resetLink4();
          resetLink5();
          setCheck(false);
        })
        .then(setMessage("success"));
    } else {
      setMessage("failed");
    }
  };

  const messageCloseHandler = () => {
    setMessage("");
  };

  const successfullySetTheLink = (
    <React.Fragment>
      <p>Successfully set the links</p>
      <div className="control">
        <button onClick={messageCloseHandler}>Close</button>
      </div>
    </React.Fragment>
  );

  const errorInSettingLinks = (
    <React.Fragment>
      <p>Please atleast set one Link</p>
      <div className="control">
        <button onClick={messageCloseHandler}>Close</button>
      </div>
    </React.Fragment>
  );

  let link1classes = link1HasError ? "control invalid" : "control";
  let link2classes = link2HasError ? "control invalid" : "control";
  let link3classes = link3HasError ? "control invalid" : "control";
  let link4classes = link4HasError ? "control invalid" : "control";
  let link5classes = link5HasError ? "control invalid" : "control";

  return (
    <Fragment>
      <section className="fetching">
        <input type="number" ref={week} />
        <button type="submit" onClick={handleClick2}>
          FETCH
        </button>
      </section>
      {check && week !== "" && (
        <div className="control">
          <h1>Week {week.current.value}</h1>
          <div className={link1classes}>
            <input
              type="text"
              id="link1"
              placeholder="Link - 1"
              onChange={link1ChangeHandler}
              onBlur={link1BlurHandler}
              value={link1}
            />
          </div>
          <div className={link2classes}>
            <input
              type="text"
              id="link2"
              placeholder="Link - 2"
              onChange={link2ChangeHandler}
              onBlur={link2BlurHandler}
              value={link2}
            />
          </div>
          <div className={link3classes}>
            <input
              type="text"
              id="link3"
              placeholder="Link - 3"
              onChange={link3ChangeHandler}
              onBlur={link3BlurHandler}
              value={link3}
            />
          </div>
          <div className={link4classes}>
            <input
              type="text"
              id="link4"
              placeholder="Link - 4"
              onChange={link4ChangeHandler}
              onBlur={link4BlurHandler}
              value={link4}
            />
          </div>
          <div className={link5classes}>
            <input
              type="text"
              id="link5"
              placeholder="Link - 5"
              onChange={link5ChangeHandler}
              onBlur={link5BlurHandler}
              value={link5}
            />
          </div>
          <button type="submit" onClick={handleClick}>
            SEND
          </button>
        </div>
      )}
      {Message !== "" && (
        <Modal onClose={messageCloseHandler}>
          {Message === "success" && successfullySetTheLink}
          {Message === "failed" && errorInSettingLinks}
        </Modal>
      )}
      <br/>
    </Fragment>
  );
};
