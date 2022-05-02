import React from 'react'
import { LogoSet } from '../Data/Data'
export const RightData = () => {

    const line = "CodeChef PCCOE Chapter is the community for the students of Pimpri Chinchwad College of Engineering, Pune. Our vision and goal is to create competitive coding culture in our campus and to inspire more people to participate in coding contest."

    const CodeChef =
        <div>
            <section style={{ color: "#120EEC" }} className='right-heading H1'>CODE</section>
            <section className='right-heading H1'>CHEF</section>
        </div>

    const PccoeChapter =
        <div>
            <section className='right-heading H2'>PCCOE</section>
            <section style={{ color: "#120EEC" }} className='right-heading H2'>CHAPTER</section>
        </div>

    const Info =
        <>
            <section className='right-heading H2'></section>
            <section style={{ padding: "10px 0", fontSize: "16px" }}>{line}</section>
            <section style={{ padding: "10px 0", fontSize: "24px" }}>Let Us Help You To Get Started</section>
        </>

    const Logos =
        <div className='home-logos-outer'>
            <div className='home-logos'>
                {LogoSet.map(e => {
                    return (<a key = {e.href} rel="noreferrer" href={e.href} target="_blank" className="home-logo"><img alt="" src={e.img} /></a>)
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
