import React from 'react'
import ChapterLogo from '../Images/2.webp'

export const RadialBG = ({ sl }) => {
  return (
    <div className='radial-outer'>
      <div className='radial'>
        <img alt = "" src={ChapterLogo} onLoad={() => sl(false)}></img>
      </div>
    </div>

  )
}
