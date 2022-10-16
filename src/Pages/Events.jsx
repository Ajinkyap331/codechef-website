import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../Config/DB";
import load from "../Images/807.gif";
import { eventAction } from "../store/event-slice";

export const Events = () => {
  const dispatch = useDispatch();
  const Event = useSelector((state) => state.event.events);
  const [Events, setEvent] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    
    if(Event !== undefined) {
      setloader(false);
      return;
    }

    let e = [];

    // condition
    // if(no data in slice) then db call
    // else fetch from slice itself.

  
    db.collection("events")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          // console.log(doc.data()); 
          e.push(doc.data());
        });
      })
      .then(() => {
        setEvent(e);
        setloader(false);
      })
      .then(() => {
        dispatch(
          eventAction.addEvents({
            events: e || [],
          })
        );
      });
  }, []);

  const Loader = (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        position: "absolute",
        zIndex: "1",
        top: 0,
        background: "#0d1117",
      }}
    >
      <img alt="Loading" src={load} style={{ height: "70px" }} />
      <p>Searching the Latest Events</p>
    </div>
  );

  return (
    <div>
      <p className="title-events">Upcoming</p>
      <div className="events-container">
        {Event !== undefined && Event.map((doc) => {
          if (doc.upcoming) {
            return (
              <section key={doc.id} className="event-events">
                <div>{doc.name}</div>
                <div>{doc.date}</div>
                <Link to={`/event/${doc.id}`}>
                  <button className="more-events">More</button>
                </Link>
                <br />
                <Link to={`/register/${doc.id}`}>
                  <button className="register-events">Register</button>
                </Link>
              </section>
            );
          } else return <></>;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <p className="title-events"> Past Events</p>
      <div className="events-container">
        {Event !== undefined && Event.map((doc) => {
          if (!doc.upcoming) {
            return (
              <section key={doc.id} className="event-events">
                <div>{doc.name}</div>
                <div>{doc.date}</div>
                <Link to={`/event/${doc.id}`}>
                  <button className="more-events">More</button>
                </Link>
                <br />
                <Link to={`/feedback/${doc.id}`}>
                  <button className="register-events">Feedback</button>
                </Link>
              </section>
            );
          } else return <></>;
        })}
      </div>

      {loader && Loader}
    </div>
  );
};
