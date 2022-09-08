import React, { useState, useRef } from "react";
import { db } from "../Config/DB";

export const EnlivenAdmin = () => {
  const week = useRef();
  const w1 = useRef();
  const w2 = useRef();
  const w3 = useRef();
  const w4 = useRef();
  const w5 = useRef();

  const handleClick2 = () => {
    db.collection("eliven")
      .doc("problem")
      .collection("weekly")
      .doc(week.current.value)
      .get()
      .then((e) => {
        console.log(e.data());
      });
  };

  const handleClick = () => {
    // console.log(week.current.value)
    db.collection("eliven")
      .doc("problem")
      .collection("weekly")
      .doc(week.current.value)
      .set({
        1: w1.current.value,
        2: w2.current.value,
        3: w3.current.value,
        4: w4.current.value,
        5: w5.current.value,
      });
  };

  return (
    <>
      <input type="number" ref={week} />
      <button onClick={handleClick2}>RECEIVE</button>
      <button onClick={handleClick}>SEND</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Week
      {week.current !== "" && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input ref={w1} />
          <input ref={w2} />
          <input ref={w3} />
          <input ref={w4} />
          <input ref={w5} />
        </div>
      )}
    </>
  );
};
