import React, { useState, useRef, useEffect } from 'react'
import { logout } from '../Config/DB'
import { db } from '../Config/DB'

export const Admin = ({ sl }) => {

  const [AdminPage, setAdminPage] = useState("Main")
  const [Events, setEvent] = useState([])
  const name = useRef()
  const desc = useRef()
  const datetime = useRef()

  useEffect(() => {
    const e = []
    db.collection("events").get().then((docs) => {
      docs.forEach((doc) => {
        console.log(doc.data())
        e.push(doc.data())
      })
    }).then(() => setEvent(e))
  }, [AdminPage])

  const sendDataToFirebase = () => {
    const data = {
      name: name.current.value,
      desc: desc.current.value,
      datetime: datetime.current.value
    }
    db.collection("events").doc(data.name).set(data).then(() => setAdminPage("Main"))
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
                <div>DateTime : {doc.datetime}</div>
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
      <section >Date and Time : <input ref={datetime} /></section>
      <button onClick={() => sendDataToFirebase()} >send</button>
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
