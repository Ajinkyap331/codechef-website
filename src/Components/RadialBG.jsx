import React, { useEffect, useRef } from 'react'
import './RadialBG.css'
import ChapterLogo from '../Images/2.webp'

export const RadialBG = ({ sl }) => {
  return (
    <div className='radial-outer'>
      <div className='radial'>
        <img src={ChapterLogo} onLoad={() => setTimeout(() => sl(false), 3000)}></img>
      </div>
    </div>

  )
}
