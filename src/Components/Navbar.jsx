import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/2.webp";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export const Navbar = () => {
  let login = useSelector((state) => state.login);

  // if (login) console.log(login);

  const [select, setselect] = useState(window.location.pathname);

  return (
    <>
      <Link to="/">
        <div className="navbar-logo">
          <img src={logo}></img>
        </div>
      </Link>

      <div className="home-navbar">
        <section
          style={{
            textDecoration: select === "/enliven" ? "underline" : "none",
          }}
          onClick={() => setselect("/enliven")}
        >
          {" "}
          <Link to="/enliven/1">Enliven</Link>
        </section>
        <section
          style={{ textDecoration: select === "/team" ? "underline" : "none" }}
          onClick={() => setselect("/team")}
        >
          {" "}
          <Link to="/team">Team</Link>
        </section>
        <section
          style={{
            textDecoration: select === "/events" ? "underline" : "none",
          }}
          onClick={() => setselect("/events")}
        >
          <Link to="/events">Event</Link>
        </section>
        {/* <section
          style={{
            textDecoration: select === "/suggest" ? "underline" : "none",
          }}
          onClick={() => setselect("/suggest")}
        >
          <Link to="/suggest">Suggest</Link>
        </section> */}
        <section
          style={{
            textDecoration: select === "/roadmap" ? "underline" : "none",
          }}
          onClick={() => setselect("/roadmap")}
        >
          <Link to="/roadmap">Roadmap2CP</Link>
        </section>
        {
          console.log(login.photoURL)
        }
        <section onClick={() => setselect("/login")}>
          <Link to="/login">
            <Avatar src={login.photoURL !== -1 ? login.photoURL : ""} />
          </Link>
        </section>
      </div>
    </>
  );
};
