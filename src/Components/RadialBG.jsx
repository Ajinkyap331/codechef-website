import React from 'react'
import ChapterLogo from '../Images/2.webp'

export const RadialBG = ({ sl }) => {
  return (
    <div className='radial-outer'>
      <div className='radial'>
        <img alt = "" src={ChapterLogo} onLoad={() => setTimeout(() => {sl(false); document.body.classList.remove("stop-scrolling")}, 3000)}></img>
      </div>
    </div>

  )
}
