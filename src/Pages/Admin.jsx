import React from 'react'
import { logout } from '../Config/DB'

export const Admin = ({ sl }) => {
  return (
    <div>Admin
      <button onClick={() => logout(sl)}>Logout</button>
    </div>
  )
}
