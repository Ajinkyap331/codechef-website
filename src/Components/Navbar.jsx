import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='home-navbar'>
            <section> <Link to="/">Home</Link></section>
            <section> <Link to="/team">Team</Link></section>
            <section><Link to="/events">Event</Link></section>
            <section><Link to="/roadmap">Roadmap To CP</Link></section>
            <section><Link to="/login">Login</Link></section>
        </div>
    )
}
