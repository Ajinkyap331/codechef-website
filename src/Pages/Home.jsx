import React from 'react'
import './Home.css'
import { Navbar } from '../Components/Navbar'
import { RadialBG } from '../Components/RadialBG'
import { RightData } from '../Components/RightData'
import CodeChefLogo from '../Images/3.webp'
export const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='home-center'>
                <div className='home-leftcontent'>
                    <p style={{ color: "#6D8219" }}>Code</p>
                    <p >Eat</p>
                    <p style={{ color: "#6D8219" }} >Sleep</p>
                    <p>Repeat</p>
                </div>
                <RadialBG />
                <RightData />
            </div>
            <img className="codechef-logo" src={CodeChefLogo}></img>
            <p className="designer">Designed with ❤️ By Ajinkya Patil</p>
        </div>
    )
}
