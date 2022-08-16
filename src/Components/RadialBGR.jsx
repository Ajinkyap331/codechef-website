import React from 'react'
import { TeamAvatar } from './TeamAvatar'

export const RadialBGR = ({president}) => {
    console.log(president)
    return (
        <div className='radial-outer1'>
            <div className='radial1'>
                <TeamAvatar photo={president} size={250} />
            </div>
        </div>

    )
}