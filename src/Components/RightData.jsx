import React, { useEffect, useRef, useState } from 'react'
import './RightData.css'
export const RightData = () => {

    var line = "CodeChef PCCOE Chapter is the community for the students of Pimpri Chinchwad College of Engineering, Pune. Our vision and goal is to create competitive coding culture in our campus and to inspire more people to participate in coding contest."
    // var i = 0;
    // const r = useRef()
    // var disp = ""

    
    // var myInterval = setInterval(Disp, 10);

    // function Disp() {
    //     disp += line[i];
    //     r.current.innerHTML = disp;
    //     i++;
    //     if (i >= line.length) console.log(true)
    // }

    // useEffect(() => {
    //     myInterval()
    // }, [])


    return (
        <div className="home-right">
            <div>
                <section style={{ color: "#120EEC" }} className='right-heading H1'>CODE</section>
                <section className='right-heading H1'>CHEF</section>
            </div>
            <div>
                <section className='right-heading H2'>PCCOE</section>
                <section style={{ color: "#120EEC" }} className='right-heading H2'>CHAPTER</section>
            </div>
            <section className='right-heading H2'></section>
            <section style={{ padding: "10px 0", fontSize: "16px" }}>{line}</section>
            <section style={{ padding: "10px 0", fontSize: "24px" }}>Let Us Help You To Get Started</section>
            <div className='home-logos-outer'>
                <div className='home-logos'>
                    <a href='https://www.linkedin.com/company/codechef-pccoe-chapter/' target="_blank" className="home-logo"><img src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>
                    <a href='https://www.facebook.com/pccoe.codechef.chapter/' target="_blank" className="home-logo"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" /></a>
                    <a href='https://www.instagram.com/pccoe.codechef.chapter/' target="_blank" className="home-logo"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
                    <a href='https://twitter.com/CodechefPccoe' target="_blank" className="home-logo"><img src="https://img.icons8.com/fluency/48/000000/twitter.png" /></a>
                </div>
            </div>

        </div>
    )
}
