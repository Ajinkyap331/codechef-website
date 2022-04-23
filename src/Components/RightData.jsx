import React, { useRef, useEffect } from 'react'

export const RightData = () => {

    var line = "CodeChef PCCOE Chapter is the community for the students of Pimpri Chinchwad College of Engineering, Pune. Our vision and goal is to create competitive coding culture in our campus and to inspire more people to participate in coding contest."

    const disp = useRef("");

    const edit = () => {
        var i = 0;
        setInterval(() => {
            console.log(i)
            disp.current.textContent = disp.current.textContent + line[i];
            i++;
        }, 1000)
    }

    useEffect(() => {
        // edit()
    }, [])

    return (
        <div class="para">
            <section>CODECHEF</section>
            <section>PCCOE CHAPTER</section>
            <section ref = {disp}>{line}</section>
            <section>Let Us Help You To get Started</section>
        </div>
    )
}
