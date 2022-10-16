import React, {useRef, useState } from 'react'
import { Arrow } from '../Components/Arrow'
import { Roadmap } from '../Data/Roadmap'


export const RTCP = () => {

  const [track, settrack] = useState(0)
  const roadmaptTitle = useRef()


  const RoadmapLeft = <>
    <section className='roadmap-left'>
      <div className='linked-steps'>
        <section style={{ boxShadow: track === 0 ? "0 0 0 4px #5de686, inset 0 0 0 4px #5de686" : "0 0 0 4px #fff, inset 0 0 0 4px #5de686" }} onClick={() => settrack(0)} className='ls1'>1</section>
        <Arrow _class='ar1' color="#ffffff" length="300" />
        <section style={{ boxShadow: track === 1 ? "0 0 0 4px #5de686, inset 0 0 0 4px #5de686" : "0 0 0 4px #fff, inset 0 0 0 4px #5de686" }} onClick={() => settrack(1)} className='ls2'>2</section>
        <Arrow _class='ar2' color="#ffffff" length="300" />
        <section style={{ boxShadow: track === 2 ? "0 0 0 4px #5de686, inset 0 0 0 4px #5de686" : "0 0 0 4px #fff, inset 0 0 0 4px #5de686" }} onClick={() => settrack(2)} className='ls3'>3</section>
        <Arrow _class='ar3' color="#ffffff" length="300" />
        <section style={{ boxShadow: track === 3 ? "0 0 0 4px #5de686, inset 0 0 0 4px #5de686" : "0 0 0 4px #fff, inset 0 0 0 4px #5de686" }} onClick={() => settrack(3)} className='ls4'>4</section>
        <Arrow _class='ar4' color="#ffffff" length="300" />
        <section style={{ boxShadow: track === 4 ? "0 0 0 4px #5de686, inset 0 0 0 4px #5de686" : "0 0 0 4px #fff, inset 0 0 0 4px #5de686" }} onClick={() => settrack(4)} className='ls5'>5</section>
        <div className='linked-title-number' >Step  : {track + 1}</div>
        <div className='linked-title'>{Roadmap[track].name}</div>
      </div>
    </section>
  </>

  const youtubeRoadmap = <>
    <div className='yt-roadmap'>
      {
        Roadmap[track].yt.map(art => {
          return (
            <div>
              <a href={art.link} target="_blank" rel="noreferrer" ><img alt = "youtube" height={30} src="https://img.icons8.com/color/344/youtube-play.png"></img></a>
              <p>{art.name}</p>
            </div>
          )
        })
      }
    </div>
  </>
  const articleRoadmap = <>
    <div className='art-roadmap'>
            {
              Roadmap[track].article.map(art => {
                return (
                  <div>
                    <a href={art.link} target="_blank" rel="noreferrer" ><img alt = "article" height={30} src="https://img.icons8.com/pastel-glyph/344/ffffff/article--v1.png"></img></a>
                    <p>{art.name}</p>
                  </div>
                )
              })
            }
          </div>
  </>

  const questionRoadmap = <>
    <div className='question-roadmap'>
      {Roadmap[track].questions.map(q => {
        return (
          <div>
            <a href={q.link} target="_blank" rel="noreferrer" ><img height={30} alt = "question" style={{ color: "white" }} src="https://img.icons8.com/carbon-copy/344/ffffff/questions.png"></img></a>
            <p>{q.name}</p>
          </div>
        )
      })}
    </div>
  </>
  const githubRoadmap = <>
    <div className='git-roadmap'>
      {
        Roadmap[track].github.map(art => {
          return (
            <div>
              <a href={art.link} target="_blank" rel="noreferrer"><img alt = "github" height={50} style={{ color: "white" }} src="https://img.icons8.com/glyph-neue/344/ffffff/github.png"></img></a>
              <p>{art.name}</p>
            </div>
          )
        })
      }
    </div>
  </>


  const threeLines = <>
    <div className='three-lines'>
      <section style={{ width: "200px" }} ></section>
      <section style={{ width: "150px" }}></section>
      <section style={{ width: "100px" }}></section>
    </div>
  </>

  const threeLines2 = <>
    <div className='three-lines2'>
      <section style={{ width: "100px" }} ></section>
      <section style={{ width: "150px" }}></section>
      <section style={{ width: "200px" }}></section>
    </div>
  </>


  return (
    <div className='roadmap'>
      {RoadmapLeft}
      <section className='roadmap-right'>
        <div ref={roadmaptTitle} style={{ fontSize: "30px", color: "#5de686" }}>{Roadmap[track].name}</div>
        <p className='roadmap-desc' >
          {Roadmap[track].desc}
        </p>
        <div style={{ fontSize: "25px", color: "#5de686" }} >Relevant Links</div>
        <div className='roadmap-icons'>
          {youtubeRoadmap}
          {articleRoadmap}
          {questionRoadmap}
          {githubRoadmap}
        </div>
      </section>
      {threeLines}
      {threeLines2}
    </div>
  )
}
