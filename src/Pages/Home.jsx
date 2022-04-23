import React from 'react'
import './Home.css'
import { Navbar } from '../Components/Navbar'
import { RadialBG } from '../Components/RadialBG'
import { RightData } from '../Components/RightData'
export const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <RadialBG/>
            <RightData/>
        </div>
    )
}
