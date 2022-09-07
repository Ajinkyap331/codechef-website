import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/2.webp'

export const Navbar = () => {

    const [select, setselect] = useState(window.location.pathname)

    return (
        <>
        <div className='navbar-logo'><img height = "64px" src = {logo}></img>CPC</div>
        <div className='home-navbar'>
            <section style={{ textDecoration: select === "/" ? "underline" : "none" }} onClick={() => setselect("/")}> <Link to="/">Home</Link></section>
            <section style={{ textDecoration: select === "/team" ? "underline" : "none" }} onClick={() => setselect("/team")}> <Link to="/team">Team</Link></section>
            <section style={{ textDecoration: select === "/events" ? "underline" : "none" }} onClick={() => setselect("/events")}><Link to="/events">Event</Link></section>
            <section style={{ textDecoration: select === "/suggest" ? "underline" : "none" }} onClick={() => setselect("/suggest")}><Link to="/suggest">Suggest</Link></section>
            <section style={{ textDecoration: select === "/roadmap" ? "underline" : "none" }} onClick={() => setselect("/roadmap")}><Link to="/roadmap">Roadmap2CP</Link></section>
        </div>
        </>
        
    )
}
