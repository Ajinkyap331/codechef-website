import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import validator from "validator";
import { useSelector } from "react-redux";
import { db } from "../Config/DB";
import { useRef } from "react";

export const Enliven = () => {

  return(
    <h1 style = {{textAlign : "center"}}>Coming Soon</h1>
  );

  const { weekno } = useParams();
  // const [links, setLinks] = useState();
  const [week, sw] = useState(parseInt(weekno));
  let navigate = useNavigate();
  let login = useSelector((state) => state.login);
  let { email } = login;

  const p1 = useRef();
  const p2 = useRef();
  const p3 = useRef();
  const p4 = useRef();
  const p5 = useRef();

  const {
    value: link1,
    isValid: link1IsValid,
    hasError: link1HasError,
    valueChangeHandler: link1ChangeHandler,
    valueChangeHandler1: link1ChangeValue,
    inputBlurHandler: link1BlurHandler,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link2,
    isValid: link2IsValid,
    hasError: link2HasError,
    valueChangeHandler: link2ChangeHandler,
    valueChangeHandler1: link2ChangeValue,
    inputBlurHandler: link2BlurHandler,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link3,
    isValid: link3IsValid,
    hasError: link3HasError,
    valueChangeHandler: link3ChangeHandler,
    valueChangeHandler1: link3ChangeValue,
    inputBlurHandler: link3BlurHandler,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link4,
    isValid: link4IsValid,
    hasError: link4HasError,
    valueChangeHandler: link4ChangeHandler,
    valueChangeHandler1: link4ChangeValue,
    inputBlurHandler: link4BlurHandler,
  } = useInput((value) => validator.isURL(value.trim()));

  const {
    value: link5,
    isValid: link5IsValid,
    hasError: link5HasError,
    valueChangeHandler: link5ChangeHandler,
    valueChangeHandler1: link5ChangeValue,
    inputBlurHandler: link5BlurHandler,
  } = useInput((value) => validator.isURL(value.trim()));

  const setData = () => {
    if (
      link1IsValid ||
      link2IsValid ||
      link3IsValid ||
      link4IsValid ||
      link5IsValid
    )
      db.collection("users")
        .doc(email)
        .collection("weekly")
        .doc(week.toString())
        .set({
          1: link1 === undefined ? "" : link1,
          2: link2 === undefined ? "" : link2,
          3: link3 === undefined ? "" : link3,
          4: link4 === undefined ? "" : link4,
          5: link5 === undefined ? "" : link5,
        })
        .then(console.log("done"));
  };

  useEffect(() => {
    if (email === -1) {
      navigate("/login");
    } else {
      db.collection("users")
        .doc(email)
        .collection("weekly")
        .doc(week.toString())
        .get()
        .then((e) => {
          const values = e.data();
          link1ChangeValue(values === undefined ? "" : values[1]);
          link2ChangeValue(values === undefined ? "" : values[2]);
          link3ChangeValue(values === undefined ? "" : values[3]);
          link4ChangeValue(values === undefined ? "" : values[4]);
          link5ChangeValue(values === undefined ? "" : values[5]);
        });

      // db.collection("enliven").doc() 
    }
  }, [email, week]);

  let link1classes = link1HasError ? "control invalid" : "control";
  let link2classes = link2HasError ? "control invalid" : "control";
  let link3classes = link3HasError ? "control invalid" : "control";
  let link4classes = link4HasError ? "control invalid" : "control";
  let link5classes = link5HasError ? "control invalid" : "control";

  return (
    <>
      <div className="control">
        <h1>Week {week}</h1>
        <div className={link1classes}>
          <p ref={p1}>Problem 1 : </p>
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
          <p ref={p1}>Problem 2 : </p>
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
          <p ref={p1}>Problem 3 : </p>
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
          <p ref={p1}>Problem 4 : </p>
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
          <p ref={p1}>Problem 5 : </p>
          <input
            type="text"
            id="link5"
            placeholder="Link - 5"
            onChange={link5ChangeHandler}
            onBlur={link5BlurHandler}
            value={link5}
          />
        </div>
        <button type="submit" onClick={setData}>
          SEND
        </button>
      </div>
    </>
  );
};
