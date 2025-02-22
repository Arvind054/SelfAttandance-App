import React from 'react'
import Avatar from '@mui/material/Avatar';
import { UserData } from '../../Context/UserContext';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
const Profile = () => {
  const {user, userEmail} = UserData();
  const navigator = useNavigate();
  const handleLogOut = ()=>{
     localStorage.removeItem('token');
     navigator('/login');
     window.location.reload();
  }
  return (
    <div className='mainBox'>
       <Avatar>{user[0]}</Avatar>
       <h2>{user}</h2>
       <h2>{userEmail}</h2>

       <Button variant='contained' sx={{background:"red"}} onClick={handleLogOut}>LogOut</Button>
    </div>
  )
}

export default Profile
