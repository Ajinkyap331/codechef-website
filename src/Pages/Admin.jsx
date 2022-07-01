import { Feedback } from '@mui/icons-material'
import React, { useState, useRef, useEffect } from 'react'
import { logout } from '../Config/DB'
import { db } from '../Config/DB'

export const Admin = ({ sl }) => {

  const [AdminPage, setAdminPage] = useState("Main")
  const [Events, setEvent] = useState([])

  const name = useRef()
  const desc = useRef()
  const date = useRef()
  const upcoming = useRef()

  useEffect(() => {
    const e = []
    db.collection("events").get().then((docs) => {
      docs.forEach((doc) => {
        e.push(doc.data())
      })
    }).then(() => setEvent(e))
  }, [AdminPage])

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const sendEventDataToFirebase = () => {
    const id = getRandomInt(100000000, 1000000000)
    const data = {
      id: id,
      name: name.current.value,
      desc: desc.current.value,
      date: date.current.value,
      upcoming: upcoming.current.checked,
    }
    console.log(data)
    db.collection("events").doc(id.toString()).set(data).then(() => setAdminPage("Main"))
  }

  const MainPage =
    <div>
      <section className='admin-events'>
        {
          Events.map((doc) => {
            return (
              <section>
                <div>Name : {doc.name}</div>
                <div>Description : {doc.desc}</div>
                <div>Date : {doc.date}</div>
              </section>
            )
          })
        }
        <button onClick={() => setAdminPage("AddEvent")}>Add event</button>
      </section>
      <button onClick={() => setAdminPage("TakeFeeback")}>Take Feedback</button>
    </div>

  const AddEvent =
    <div className='addevent'>
      <section>AddEvent</section>
      <section >Name : <input ref={name} /></section>
      <section >Description : <input ref={desc} /></section>
      <section >Date: <input type= "date" ref={date} /></section>
      <section >upcoming : <input ref={upcoming} type="checkbox" /></section>
      <button onClick={() => sendEventDataToFirebase()} >send</button>
      <button onClick={() => setAdminPage("Main")} >Back</button>
    </div>

  const TakeFeeback =
    <div>

    </div>


  return (
    <>
      <div>Admin
        <button onClick={() => logout(sl)}>Logout</button>
      </div>
      {
        AdminPage === "Main" && MainPage
      }
      {
        AdminPage === "AddEvent" && AddEvent
      }
      {
        AdminPage === "TakeFeedback" && TakeFeeback
      }
    </>

  )
}
