import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Config/DB'
import load from '../Images/807.gif'

export const Events = () => {
  const [Events, setEvent] = useState([])

  const [loader, setloader] = useState(true)

  useEffect(() => {
    const e = []
    db.collection("events").get()
      .then((docs) => {
        docs.forEach((doc) => {
          e.push(doc.data())
        })
      })
      .then(() => { setEvent(e); setloader(false) })
  }, [])

  const Loader =
    <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
      <img alt="" src={load} style={{ height: "70px" }} />
      <p>Searching the Latest Events</p>
    </div>

  return (
    <div>Ongoing
      {
        Events.map((doc) => {
          if (doc.upcoming) {
            return (
              <section key = {doc.id}>
                <div>Name : {doc.name}</div>
                <div>Date : {doc.date}</div>
                <Link to={`/event/${doc.id}`} ><button>More</button></Link>
                <Link to={`/register/${doc.id}`} ><button>Register</button></Link>
              </section>
            )
          }
        })
      }
      <br /><br /><br /><br />
      Past Events
      {
        Events.map((doc) => {
          if (!doc.upcoming) {
            return (
              <section  key = {doc.id}>
                <div>Name : {doc.name}</div>
                <div>Description : {doc.desc}</div>
                <div>Date : {doc.date}</div>
                <Link to={`/event/${doc.id}`} ><button>More</button></Link>
                <Link to={`/feedback/${doc.id}`} ><button>Feedback</button></Link>
              </section>
            )
          }
        })
      }
      {
        loader && Loader
      }
    </div>
  )
}
