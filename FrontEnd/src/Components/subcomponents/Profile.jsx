import React from 'react'
import Avatar from '@mui/material/Avatar';
import { UserData } from '../../Context/UserContext';
import { Button } from '@mui/material';
const Profile = () => {
  const {user, userEmail} = UserData();
  return (
    <div className='mainBox'>
       <Avatar></Avatar>
       <h2>{user}</h2>
       <h2>{userEmail}</h2>
       <Button variant='outlined' >change Password</Button>
       <Button variant='contained' sx={{background:"red"}}>SignOut</Button>
    </div>
  )
}

export default Profile
