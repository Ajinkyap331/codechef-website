import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [select, setselect] = useState("Home")

    return (
        <div className='home-navbar'>
            <section style={{ textDecoration: select == "Home" ? "underline" : "none" }} onClick={() => setselect("Home")}> <Link to="/">Home</Link></section>
            <section style={{ textDecoration: select == "Team" ? "underline" : "none" }} onClick={() => setselect("Team")}> <Link to="/team">Team</Link></section>
            <section style={{ textDecoration: select == "Event" ? "underline" : "none" }} onClick={() => setselect("Event")}><Link to="/events">Event</Link></section>
            <section style={{ textDecoration: select == "Roadmap" ? "underline" : "none" }} onClick={() => setselect("Roadmap")}><Link to="/roadmap">Roadmap To CP</Link></section>
            {/* <section style={{ textDecoration: select == "Login" ? "underline" : "none" }} onClick={() => setselect("Login")}><Link to="/login">Login</Link></section> */}
        </div>
    )
}
