import React, { useEffect, useRef, useState } from 'react'
import { Arrow } from '../Components/Arrow'
import { Roadmap } from '../Data/Roadmap'


export const RTCP = () => {

  const [track, settrack] = useState(0)
  const roadmaptTitle = useRef()

  // useEffect(() => {
  //   roadmaptTitle.current.style.position = "relative"
  //   roadmaptTitle.current.style.top = `-200px`;
  //   let i = -200
  //   let interval = setInterval(() => {
  //     if(i == 10)
  //       clearInterval(interval)
  //     roadmaptTitle.current.style.top = `${i+=1}px`;
  //   }, 1)
  // }, [track])

  return (
    <div className='roadmap'>
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
      <section className='roadmap-right'>
        <div ref={roadmaptTitle} style={{ fontSize: "30px", color: "#5de686" }}>{Roadmap[track].name}</div>
        <p className='roadmap-desc' >
          {Roadmap[track].desc}
        </p>
        <div style={{ fontSize: "25px", color: "#5de686" }} >Relevant Links</div>
        <div className='roadmap-icons'>
          <div className='yt-roadmap'>
            {
              Roadmap[track].yt.map(art => {
                return (
                  <div>
                    <a href={art.link} target="_blank"><img height={30} src="https://img.icons8.com/color/344/youtube-play.png"></img></a>
                    <p>{art.name}</p>
                  </div>
                )
              })
            }
          </div>

          <div className='art-roadmap'>
            {
              Roadmap[track].article.map(art => {
                return (
                  <div>
                    <a href={art.link} target="_blank"><img height={30} src="https://img.icons8.com/pastel-glyph/344/ffffff/article--v1.png"></img></a>
                    <p>{art.name}</p>
                  </div>
                )
              })
            }
          </div>

          <div className='question-roadmap'>
            {Roadmap[track].questions.map(q => {
              return (
                <div>

                  <a href={q.link} target="_blank"><img height={30} style={{ color: "white" }} src="https://img.icons8.com/carbon-copy/344/ffffff/questions.png"></img></a>
                  <p>{q.name}</p>
                </div>
              )
            })}
          </div>
          <div className='git-roadmap'>
            {
              Roadmap[track].github.map(art => {
                return (
                  <div>
                    <a href={art.link} target="_blank"><img height={50} style={{ color: "white" }} src="https://img.icons8.com/glyph-neue/344/ffffff/github.png"></img></a>
                    <p>{art.name}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>

      <div className='three-lines'>
        <section style={{ width: "200px" }} ></section>
        <section style={{ width: "150px" }}></section>
        <section style={{ width: "100px" }}></section>
      </div>

      <div className='three-lines2'>
        <section style={{ width: "100px" }} ></section>
        <section style={{ width: "150px" }}></section>
        <section style={{ width: "200px" }}></section>
      </div>
    </div>
  )
}
