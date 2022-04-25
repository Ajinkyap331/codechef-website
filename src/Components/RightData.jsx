import React, { useRef, useEffect } from 'react'
import './RightData.css'
export const RightData = () => {

    var line = "CodeChef PCCOE Chapter is the community for the students of Pimpri Chinchwad College of Engineering, Pune. Our vision and goal is to create competitive coding culture in our campus and to inspire more people to participate in coding contest."
    return (
        <div class="home-right">
            <div>
                <section style = {{color : "#6D8219"}}className='right-heading H1'>CODE</section>
                <section className='right-heading H1'>CHEF</section>
            </div>
            <div>
                <section className='right-heading H2'>PCCOE</section>
                <section style = {{color : "#6D8219"}}className='right-heading H2'>CHAPTER</section>
            </div>
            <section className='right-heading H2'></section>
            <section style={{ padding: "10px 0", fontSize: "18px" }}>{line}</section>
            <section style={{ padding: "10px 0", fontSize: "24px" }}>Let Us Help You To get Started</section>
        </div>
    )
}
