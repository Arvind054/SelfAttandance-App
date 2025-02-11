import React, {useEffect, useState} from 'react'
import { AppBar, Toolbar,IconButton, Typography, Box} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserData } from '../Context/UserContext';
const SignUpPage = () => {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {UserSignUp, isAuth} = UserData();
  const navigator = useNavigate();
  const handleSignUp = ()=>{
    if(!name || !password || !email){
      navigator("/signUp");
      toast.error("Invalid Credientials");
      return ;
    }else{
      UserSignUp(name, email, password, navigator);
    }
     
  }
  useEffect(()=>{
        if(isAuth){
          navigator("/");
        }
  });
  return (
    <>
     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={() => setOpen(!open)} sx={{ mr: 2 }}>
                        <MenuIcon  onClick = {()=>{setOpen(!open)}}/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Self Attandance
                    </Typography>
                </Toolbar>
          </AppBar>
        <Toolbar />
        <Box sx={{width:"90vw", margin:"30px"}}>
          <div className="userInputs">  
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e)=>{setName(e.target.value)}} />
           <TextField id="standard-basic" label="Email" variant="standard"value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    
          
          <Button variant="contained" onClick={handleSignUp}>Login</Button> 
          <i>already a user ? <a href="/Login">Login</a></i>
                            <Button variant='outlined'> Continue With Google</Button> 
          </div>
           
        </Box>
    </>
  )
}

export default SignUpPage
