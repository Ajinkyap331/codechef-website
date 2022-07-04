import React, { useEffect, useMemo, useState } from 'react'
import { db } from '../Config/DB'
import { useParams, useNavigate } from 'react-router-dom';
import load from '../Images/807.gif'
import firebase from 'firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginG } from '../Config/DB';


export const Event = () => {
    const { id } = useParams();

    const [user, setuser] = useState(false)
    const [eventData, seteventData] = useState(false)
    const [R, setr] = useState(false)
    const [loader, setloader] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        db.collection("events").doc(id).get().then(doc => {
            seteventData(doc.data())
        })
    }, [])

    const sendMyInterest = () => {
        db.collection("register").doc(eventData.id.toString()).update({
            users: firebase.firestore.FieldValue.arrayUnion(user.email)
        }).then(() => {
            toast.success("Registered Successfully !", {
                position: toast.POSITION.TOP_CENTER,
                onClose: () => navigate('/events')
            });
        }).catch(() => {
            db.collection("register").doc(eventData.id.toString()).set({
                users: firebase.firestore.FieldValue.arrayUnion(user.email)
            }).then(() => {
                toast.success("Registered Successfully !", {
                    position: toast.POSITION.TOP_CENTER,
                    onClose: () => navigate('/events')
                })
            })
        })
    }

    const Loader =
        <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
            <img alt="" src={load} style={{ height: "70px" }} />
            <p>Getting the Event Data</p>
        </div>

    const Display = <>
        <div>Name : {eventData.name}</div>
        <div>Description : {eventData.desc}</div>
        <button onClick={() => setr(true)}  >Register</button>
        <div>Date : {eventData.date}</div>
        <img onLoad={() => {
            setloader(false)
        }} src="https://drive.google.com/uc?export=view&id=16Qy3QIchgfEJrexr-S_2bQp2Z_Ffg4Aw"></img>
    </>

    const Register =
        <>
            <div>Name : {user.displayName}</div>
            <div>Email : {user.email}</div>
            <div>Event Name : {eventData.name}</div>
            <div>Description : {eventData.desc}</div>
            <div>Date : {eventData.date}</div>
            <button onClick={() => sendMyInterest()}>I am Interested to Join</button>
        </>

    return (
        <>
            {
                R ?
                    <>
                        Register
                        {user && Register}
                        {!user && <button onClick={() => loginG(setuser)}>Login</button>}
                        <ToastContainer />
                    </>
                    :
                    <>
                        {Display}
                        {loader && Loader}
                    </>
            }

        </>
    )
}   
