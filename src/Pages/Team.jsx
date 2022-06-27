import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { Teams } from '../Data/Data'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { TeamAvatar } from '../Components/TeamAvatar'
import { RadialBGR } from '../Components/RadialBGR';
import load from '../Images/807.gif'


export const Team = () => {
  var team = ["CP", "DESIGN", "EVENT", "SOCIAL MEDIA"]
  const [selected, setselected] = useState(0)

  const President =
    <div className="team-president">
      <p>President</p>
      <RadialBGR type="avatar" />
      <p>Rahul Badgujar</p>
    </div>

  const SelectTeamWithButton =
    <div className="team-select">
      {selected > 0 ? <ArrowCircleLeftIcon onClick={() => setselected(selected => selected - 1)} /> : <div style={{ width: "23px" }}></div>}
      <div>
        <section style={{ color: "#5DE686" }}>{team[selected]}</section>
        <section> TEAM</section>
      </div>
      {selected < 3 ? <ArrowCircleRightIcon onClick={() => setselected(selected => selected + 1)} /> : <div style={{ width: "23px" }}></div>}
    </div>

  const TeamLead =
    <div className="team-card">
      <TeamAvatar photo={Teams[team[selected]].lead.photo} size={200} selected={selected} />
      <p>{Teams[team[selected]].lead.name}</p>
    </div>

  const MembersMap =
    <div className='team-membersmap'>
      {
        Teams[team[selected]].members.map((e) => {
          return (
            <div key={e.name} className="team-card">
              <TeamAvatar photo={e.photo} size={100} selected={selected} />
              <p>{e.name}</p>
            </div>
          )
        })
      }
    </div>

  const Loader =
    <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
      <img alt="" src={load} style={{ height: "70px" }} />
      <p>Almost There</p>
    </div>

  return (
    <div>
      <div className="team-body">
        {President}
        <div className='team-teams'>
          {SelectTeamWithButton}
          {TeamLead}
          {MembersMap}
        </div>
      </div>
    </div>
  )
}

