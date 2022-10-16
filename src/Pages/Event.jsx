import React, { useEffect, useState } from 'react'
import { db } from '../Config/DB'
import { useParams, Link, useNavigate } from 'react-router-dom';
import load from '../Images/807.gif'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EventPoster } from '../Components/EventPoster';


export const Event = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [eventData, seteventData] = useState(false)
    const [loader, setloader] = useState(true)

    useEffect(() => {
        db.collection("events").doc(id).get().then(doc => {
            if (doc.exists) {
                seteventData(doc.data())
                setloader(false)
            }
            else {

                toast.error("No Such Event Exists !", {
                    position: toast.POSITION.TOP_CENTER,
                    onClose: () => navigate("/events"),
                })
            }
        })
    }, [id, navigate])

    const Loader =
        <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
            <img alt="Loading" src={load} style={{ height: "70px" }} />
            <p>Getting the Event Data</p>
        </div>

    const Display =
        <div className='events-playarea'>   
            <EventPoster eventData={eventData}/>
            <div className='right-event'>
                <div>{eventData.name}</div>
                <div>{eventData.desc}</div>
                <div>Date : {eventData.date}</div>
                {
                    eventData.upcoming ?
                        <Link to={`/register/${id}`} ><button className='register-btn-event' >Register</button></Link>
                        : <Link to={`/feedback/${id}`} ><button className='feedback-btn-event' >Feedback</button></Link>
                }
            </div>
        </div>
    return (
        <>
            {Display}
            {loader && Loader}
            <ToastContainer />
        </>
    )
}   
