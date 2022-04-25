import React, { useEffect } from 'react'
import './Navbar.css'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {



    return (
        <div className='home-navbar'>
            <section> <Link to="/team">Team</Link></section>
            <section><Link to="/events">Event</Link></section>
            <section><Link to="/roadmap">Roadmap To CP</Link></section>
            <section><Link to="/register">Register</Link></section>
            <section><Link to="/login"><Avatar src="" /></Link></section>
        </div>
    )
}
