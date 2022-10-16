import { Link } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react'
import { logout } from '../Config/DB'
import { db } from '../Config/DB'
import load from '../Images/807.gif'

export const Admin = ({ sl }) => {

  const [loader, setloader] = useState(true)

  const [AdminPage, setAdminPage] = useState("Main")
  const [Events, setEvent] = useState([])

  const [a, sa] = useState(true)

  const name = useRef()
  const desc = useRef()
  const date = useRef()
  const upcoming = useRef()

  useEffect(() => {

    if (localStorage.getItem("user") !== "XuO#hyN#SeF#TDd$EmU8cW!PK0BxcUBh") {
      sa(false)
      return
    }

    const e = []
    db.collection("events").get().then((docs) => {
      docs.forEach((doc) => {
        e.push(doc.data())
      })
    }).then(() => {setEvent(e); setloader(false)})
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
                <Link to={`/edit/${doc.id}`} ><button>details</button></Link>
              </section>
            )
          })
        }
        <button onClick={() => setAdminPage("AddEvent")}>Add event</button>
      </section>
    </div>

  const Loader =
    <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
      <img alt="Loading" src={load} style={{ height: "70px" }} />
      <p>Fetching Data</p>
    </div>

  const AddEvent =
    <div className='addevent'>
      <section>AddEvent</section>
      <section >Name : <input ref={name} /></section>
      <section >Description : <input ref={desc} /></section>
      <section >Date: <input type="date" ref={date} /></section>
      <section >upcoming : <input ref={upcoming} type="checkbox" /></section>
      <button onClick={() => sendEventDataToFirebase()} >send</button>
      <button onClick={() => setAdminPage("Main")} >Back</button>
    </div>


  return (
    <>
      {
        a ? <>
          <div>Admin
            <button onClick={() => logout(sl)}>Logout</button>
          </div>
          {
            loader ? Loader : AdminPage === "Main" && MainPage
          }
          {
            AdminPage === "AddEvent" && AddEvent
          }
        </> : <>
          Can't access This Page
        </>
      }

    </>

  )
}


// firebase deploy --only hosting:codechefpccoe