import React, { useState } from 'react'
import './Team.css'
import { Navbar } from '../Components/Navbar'
import { Teams } from '../Data/Data'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Rahul from '../Images/Rahul Badgujar.webp'
import { TeamAvatar } from '../Components/TeamAvatar'


export const Team = () => {
  var team = ["CP", "DESIGN", "EVENT", "SOCIAL MEDIA"]
  const [selected, setselected] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="team-body">
        <div className="team-president">
          <p>President</p>
          <TeamAvatar photo={Rahul} size={250} />
          <p>Rahul Badgujar</p>
        </div>
        <div className='team-teams'>
          <div className="team-select">
            {selected > 0 ? <ArrowCircleLeftIcon onClick={() => setselected(selected => selected - 1)} /> : <div style={{ width: "23px" }}></div>}
            <div>
              <section style = {{color : "#6D8219"}}>{team[selected]}</section>
              <section > TEAM</section>
            </div>
            {selected < 3 ? <ArrowCircleRightIcon onClick={() => setselected(selected => selected + 1)} /> : <div style={{ width: "23px" }}></div>}
          </div>
          <div className="team-card">
            <TeamAvatar photo={Teams[team[selected]].lead.photo} size={200} selected={selected} />
            <p>{Teams[team[selected]].lead.name}</p>
          </div>
          <div>
            {
              Teams[team[selected]].members.map((e) => {
                return (
                  <div className="team-card">
                    <TeamAvatar photo={e.photo} size={100} selected={selected} />
                    <p>{e.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

