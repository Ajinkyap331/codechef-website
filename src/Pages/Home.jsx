import React, { useState } from 'react'
import { RadialBG } from '../Components/RadialBG'
import { RightData } from '../Components/RightData'
import CodeChefLogo from '../Images/3.webp'
import load from '../Images/807.gif'
export const Home = () => {

    const [l, sl] = useState(true)


    const LeftContent =
        <div className='home-leftcontent'>
            <p style={{ color: "#5de686" }}>Code</p>
            <p >Eat</p>
            <p style={{ color: "#5de686" }} >Sleep</p>
            <p>Repeat</p>
        </div>

    const Loader =
        <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
            <img alt="Loading" src={load} style={{ height: "70px" }} />
            <p>Almost There</p>
        </div>

    const LogoCopyrightDesigner =
        <>
            <img alt="Logo" className="codechef-logo" src={CodeChefLogo}></img>
            <div className="copy-desi">
                <a rel="noreferrer" href="https://www.linkedin.com/in/ajinkya-patil-144709208/" target="_blank" className="designer">Designed with ❤️ By Ajinkya Patil</a>
                <p className="copyright">Copyright @2022 PCCOE CodeChef Chapter all rights reserved</p>
            </div>
        </>

    const threeLines = <>
        <div className='three-lines'>
            <section style={{ width: "200px" }} ></section>
            <section style={{ width: "150px" }}></section>
            <section style={{ width: "100px" }}></section>
        </div>
    </>

    const threeLines2 = <>
        <div className='three-lines2'>
            <section style={{ width: "100px" }} ></section>
            <section style={{ width: "150px" }}></section>
            <section style={{ width: "200px" }}></section>
        </div>
    </>

    return (
        <>
            {threeLines}
            {threeLines2}
            <div className='home'>
                <div className='home-center'>
                    <section>
                        {LeftContent}
                        <RadialBG sl={sl} />
                    </section>
                    <RightData />
                </div>
                {LogoCopyrightDesigner}
            </div>
            {l && Loader}
        </>


    )
}
