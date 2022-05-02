import React, {  useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { Teams } from '../Data/Data'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { TeamAvatar } from '../Components/TeamAvatar'
import { RadialBGR } from '../Components/RadialBGR';


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
        <section style={{ color: "#6D8219", fontSize: "25px" }}>{team[selected]}</section>
        <section style={{ fontSize: "25px" }}> TEAM</section>
      </div>
      {selected < 3 ? <ArrowCircleRightIcon onClick={() => setselected(selected => selected + 1)} /> : <div style={{ width: "23px" }}></div>}
    </div>

  const TeamLead =
    <div className="team-card">
      <TeamAvatar photo={Teams[team[selected]].lead.photo} size={200} selected={selected} />
      <p>{Teams[team[selected]].lead.name}</p>
    </div>

  const MembersMap =
    <div>
      {
        Teams[team[selected]].members.map((e) => {
          return (
            <div key = {e.name} className="team-card">
              <TeamAvatar photo={e.photo} size={100} selected={selected} />
              <p>{e.name}</p>
            </div>
          )
        })
      }
    </div>



  return (
    <div>
      <Navbar />
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

