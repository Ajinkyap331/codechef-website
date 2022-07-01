import React, { useEffect, useRef } from 'react'
import { LogoSet } from '../Data/Data'
export const RightData = ({ l }) => {

    const line = "CodeChef PCCOE Chapter is the community for the students of Pimpri Chinchwad College of Engineering, Pune. Our vision and goal is to create competitive coding culture in our campus and to inspire more people to participate in coding contest."
    var i = 0;
    const disp = useRef()

    useEffect(() => {
        var interval;
        setTimeout(() => {
            interval = setInterval(() => {
                if (i >= line.length) return () => clearInterval(interval);
                disp.current.innerHTML += line[i++]
            }, 50)
        }, 4000)
        return () => clearInterval(interval);
    }, [])



    const CodeChef =
        <div>
            <section style={{ color: "#5de686" }} className='right-heading H1'>CODE</section>
            <section className='right-heading H1'>CHEF</section>
        </div>

    const PccoeChapter =
        <div>
            <section className='right-heading H2'>PCCOE</section>
            <section style={{ color: "#5de686" }} className='right-heading H2'>CHAPTER</section>
        </div>

    const Info =
        <>
            <section className='right-heading H2'></section>
            <section ref={disp} style={{ padding: "10px 0", fontSize: "16px", height : "130px", display : "flex", alignItems : "center", textAlign: "justify", lineHeight : "150%" }}></section>
            <section style={{ padding: "10px 0", fontSize: "24px" }}>Let Us Help You To Get Started</section>
        </>

    const Logos =
        <div className='home-logos-outer'>
            <div className='home-logos'>
                {LogoSet.map((e, i) => {
                    return (<a key={e.href} rel="noreferrer" href={e.href} target="_blank" className="home-logo"><img alt={`Image ${i}`} src={e.img} /></a>)
                })}
            </div>
        </div>

    return (
        <div className="home-right">
            {CodeChef}
            {PccoeChapter}
            {Info}
            {Logos}
        </div>
    )
}
