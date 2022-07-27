import React from 'react'
import { TeamAvatar } from './TeamAvatar'
import Rahul from '../Images/Rahul Badgujar.webp'

export const RadialBGR = () => {

    return (
        <div className='radial-outer1'>
            <div className='radial1'>
                <TeamAvatar photo={Rahul} size={250} />
            </div>
        </div>

    )
}