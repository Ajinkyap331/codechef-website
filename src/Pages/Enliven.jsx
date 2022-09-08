import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Enliven = () => {
  const { weekno } = useParams();

  const [week, sw] = useState(parseInt(weekno));
  let navigate = useNavigate();
  let login = useSelector((state) => state.login);

  useEffect(() => {
    if (login.email === -1) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div>Enliven</div>
      {week}
    </>
  );
};
