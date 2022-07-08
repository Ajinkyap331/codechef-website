import React, { useEffect, useMemo, useState } from 'react'
import { db } from '../Config/DB'
import { useParams, Link, useNavigate } from 'react-router-dom';
import load from '../Images/807.gif'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Event = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [eventData, seteventData] = useState(false)
    const [loader, setloader] = useState(true)

    useEffect(() => {
        db.collection("events").doc(id).get().then(doc => {
            console.log(doc.exists)
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
    }, [])

    const Loader =
        <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
            <img alt="" src={load} style={{ height: "70px" }} />
            <p>Getting the Event Data</p>
        </div>

    const Display = <>
        <div>Name : {eventData.name}</div>
        <div>Description : {eventData.desc}</div>
        <Link to={`/register/${id}`} ><button>Register</button></Link>
        <div>Date : {eventData.date}</div>
        <img src="https://drive.google.com/uc?export=view&id=16Qy3QIchgfEJrexr-S_2bQp2Z_Ffg4Aw"></img>
    </>
    return (
        <>
            {Display}
            {loader && Loader}
            <ToastContainer />
        </>
    )
}   
