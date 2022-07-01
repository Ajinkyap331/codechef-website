import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { loginG } from '../Config/DB';
import { db } from '../Config/DB';
import firebase from 'firebase';
import { useNavigate  } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setuser] = useState(false)

    const [eventData, seteventData] = useState(false)

    useEffect(() => {
        db.collection("events").doc(id).get().then(doc => {
            seteventData(doc.data())
        })
    }, [])

    const HandleLogin = async () => {
        loginG(setuser)
    }

    const Register =
        <>
            <div>Name : {user.displayName}</div>
            <div>Email : {user.email}</div>
            <div>Event Name : {eventData.name}</div>
            <div>Description : {eventData.desc}</div>
            <div>Date : {eventData.date}</div>
            <button onClick = {() => sendMyInterest()}>I am Interested to Join</button>
        </>

    const sendMyInterest = () => {
        db.collection("register").doc(eventData.id.toString()).update({
            users : firebase.firestore.FieldValue.arrayUnion(user.email)
        }).then(() =>  {navigate("/events")})
    }

    return (
        <>
            Register
            {user && Register}
            {!user && <button onClick={() => HandleLogin()}>Login</button>}
        </>
    )
}
