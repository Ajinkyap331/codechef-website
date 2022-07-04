import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../Config/DB';
import { useNavigate } from 'react-router-dom';
import { Paper, Table, TableRow, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import load from '../Images/807.gif'


export const EditEvent = () => {
  let navigate = useNavigate()
  const { id } = useParams();

  const [Registered, setr] = useState(false)

  const [loader, setloader] = useState(true)

  const [a, sa] = useState(true)

  const name = useRef()
  const desc = useRef()
  const date = useRef()
  const upcoming = useRef()

  const [rows, sr] = useState([]);

  useEffect(() => {

    if (localStorage.getItem("user") !== "XuO#hyN#SeF#TDd$EmU8cW!PK0BxcUBh") {
      sa(false)
      return
    }

    db.collection("events").doc(id).get().then(doc => {
      return doc.data()
    }).then(data => {
      name.current.value = data.name
      desc.current.value = data.desc
      date.current.value = data.date
      upcoming.current.checked = data.upcoming
    })

    db.collection("register").doc(id).get().then(data => {
      setr(data.data().users)
    })

    db.collection("feedback").doc(id).collection("user").get().then(data => {
      let i = 0
      data.forEach((doc) => {
        let d = doc.data()
        sr(rows => [...rows, createData(++i, d.name, d.email, d.pnumber, d.rating, d.suggest)]);
      })
    }).then(() => {
      setloader(false)
    })

  }, [])

  const EditData = () => {
    const data = {
      id: id,
      name: name.current.value,
      desc: desc.current.value,
      date: date.current.value,
      upcoming: upcoming.current.checked,
    }
    db.collection("events").doc(id.toString()).set(data).then(() => navigate('/login'))
  }

  const Loader =
    <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
      <img alt="" src={load} style={{ height: "70px" }} />
      <p>Fetching Event Data</p>
    </div>

  function createData(number, item, qty, pn, rating, price) {
    return { number, item, qty, pn, rating, price };
  }

  const _EditEvent = <>
    <section>Edit Details</section>
    <section >Name : <input ref={name} /></section>
    <section >Description : <input ref={desc} /></section>
    <section >Date: <input type="date" ref={date} /></section>
    <section >upcoming : <input ref={upcoming} type="checkbox" /></section>
    <button onClick={() => EditData()}>Save Changes</button>
    <br />
    <br />
    <br />
  </>

  const Count = <>
    {
      Registered ?
        <section>Register Count : {Registered.length} </section> :
        <section>Register Count : 0 </section>
    }
    <br />
    <br />
  </>

  const RegisteredPeople = <>
    <section>Emails of Student Registered</section>
    {
      Registered ?
        <>

          {
            Registered &&
            Registered.map(people => {
              return (
                <section>{people}</section>
              )
            })
          }
        </>
        :
        <>None</>
    }
    <br />
    <br />
  </>

  const PeopleFeedback = <>
    <section>Feedback</section>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.item}</TableCell>
              <TableCell align="center">{row.qty}</TableCell>
              <TableCell align="center">{row.pn}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>

  return (
    <>
      {a ?
        <>
          {loader && Loader}
          <div>
            {_EditEvent}
            {Count}
            {RegisteredPeople}
            {PeopleFeedback}
          </div>
        </> :
        <>
          Can't access This Page
        </>
      }
    </>
  )
}
