import React, { useEffect, useState } from 'react'
import loading from '../Images/1488.gif'
import { Avatar } from '@mui/material'
export const TeamAvatar = ({ photo, size, selected }) => {

    const [load, setload] = useState(false)

    useEffect(() => {
        return () => {
            setload(false)
        }
    }, [selected])

    return (
        <div>
            {load ?
                <Avatar src={photo} sx={{ width: size, height: size }} />
                :
                <Avatar src={loading} sx={{ width: 50, height: 50 }} onLoad={() => setload(true)} />
            }
        </div>
    )
}
