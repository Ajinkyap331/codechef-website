import React, { useState } from 'react'
import { Teams } from '../Data/Data'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { TeamAvatar } from '../Components/TeamAvatar'
import { RadialBGR } from '../Components/RadialBGR';
// import load from '../Images/807.gif'


export const Team = () => {
  var team = ["CP", "DESIGN", "EVENT", "SOCIAL MEDIA"]
  const [selected, setselected] = useState(0)
  const [Year, setyear] = useState("2021")

  const President =
    <div className="team-president">
      <p>President</p>
      <RadialBGR president={Teams[Year].President.photo} />
      <p>{Teams[Year].President.name}</p>
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
      <TeamAvatar photo={Teams[Year][team[selected]].lead.photo} size={200} selected={selected} />
      <p>{Teams[Year][team[selected]].lead.name}</p>
    </div>

  const MembersMap =
    <div className='team-membersmap'>
      {
        Teams[Year][team[selected]].members.map((e) => {
          return (
            <div key={e.name} className="team-card">
              <TeamAvatar photo={e.photo} size={100} selected={selected} />
              <p>{e.name}</p>
            </div>
          )
        })
      }
    </div>

  const slider = <>
    {
      Year === "2021" &&
      <div className='team-slider-right' onClick={() => { setyear("2022") }}>
        <img height={80} src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"></img>
      </div>
    }
    {
      Year === "2022" &&
      <div className='team-slider-left' onClick={() => { setyear("2021") }}>
        <img height={80} src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"></img>
      </div>
    }

  </>

  // const Loader =
  //   <div style={{ display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", position: "absolute", zIndex: "1", top: 0, background: "#0d1117" }}>
  //     <img alt="" src={load} style={{ height: "70px" }} />
  //     <p>Almost There</p>
  //   </div>

  const year = <>
    <div style={{ fontSize: "20px", textAlign: "center" }}>Team {Year} - {parseInt(Year) + 1}</div>
  </>
  return (
    <div>
      {year}
      <div className="team-body">
        {President}
        <div className='team-teams'>
          {SelectTeamWithButton}
          {TeamLead}
          {MembersMap}
          {slider}
        </div>
      </div>
    </div>
  )
}

