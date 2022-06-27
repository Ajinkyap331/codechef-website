import React, { useState, useEffect } from 'react'
import { db } from '../Config/DB'
import load from '../Images/807.gif'

export const Events = () => {
  const [Events, setEvent] = useState([])

  const [loader, setloader] = useState(true)
  useEffect(() => {
    const e = []
    db.collection("events").get().then((docs) => {
      docs.forEach((doc) => {
        console.log(doc.data())
        e.push(doc.data())
      })
    }).then(() => {setEvent(e); setTimeout(() => setloader(false), 1000) })
  }, [])

  const Loader =
  <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
      <img alt = "" src={load} style={{ height: "70px" }} />
      <p>Searching the Latest Events</p>
  </div>

  return (
    <div>Events
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
      {
        loader && Loader
      }
    </div>
  )
}
