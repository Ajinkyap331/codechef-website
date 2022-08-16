import React, { useState } from 'react'
import load from '../Images/807.gif'


export const EventPoster = ({ eventData }) => {

    const [Loading, setloading] = useState(true)

    const Loader =
        <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
            <img alt="Loading" src={load} style={{ height: "70px" }} />
            <p>Loading the Poster...</p>
        </div>

    return (
        <div>
            {Loading && Loader}
            <div className='left-event'><img onLoad={() => setloading(false)} alt="Poster" src={`https://drive.google.com/uc?export=view&id=${eventData.posterid}`} /></div>
        </div>
    )
}
