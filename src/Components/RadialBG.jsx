import React from 'react'
import './RadialBG.css'
import ChapterLogo from '../Images/2.webp'
export const RadialBG = () => {
  return (
    <div className='radial-outer'>
      <div className='radial'>
        <img src={ChapterLogo}></img>
      </div>
    </div>

  )
}
