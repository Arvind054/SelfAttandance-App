import { createContext, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import server from '../server.js';
import axios from 'axios';
const UserContext = createContext();
export const UserProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false);
    const userRef = useRef("User");
    const userEmailRef = useRef("");
    const userSubs = useRef(null);
    const [userName, setUserName] = useState("User");
    //User Login function-->
    async function UserLogin(email, password, navigator){
        try{
             const response = await axios.get(`${server}/login`, {
                params:{
                    email:email,
                    password:password,
                }
             });
              const token = response.data.token;
              localStorage.setItem('token', token);
              userEmailRef.current = email;
             navigator("/");
             toast.success("Login SuccessFull");
             setIsAuth(true);
        }catch(e){
            toast.error("Invalid Crediantials");
            navigator("/login");
            setIsAuth(false);
        }
    }
    //User Sign Up
    async function UserSignUp(name, email, password, navigator){
        try{
            const response = await axios.post(`${server}/signUp`, {
                params:{
                    name:name,
                    email:email,
                    password:password,
                }
            });
             const token = response.data.token;
             localStorage.setItem('token', token);
           userRef.current = name;
           userEmailRef.current =email;
            navigator("/");
            toast.success("SignUp successfull");
            setIsAuth(true);
            userRef.current = name;
        }catch(e){
            toast.error("Invalid Credientials");
            navigator("/signUp");
            setIsAuth(false);
        }
    }
//User Verify by JWT Function;
async function verifyUser(){
   const token = localStorage.getItem('token');
   if(token){
    try{
     const response = await fetch(`${server}/verify?token=${token}`);
     setIsAuth(true);
    }
    catch(err){
        setIsAuth(false);
    }
   }else{
    setIsAuth(false);
   }
}
//get all user Data:
async function getUserData(){
    const token = localStorage.getItem('token');
   if(token && isAuth){
    try{
    const response = await axios.get(`${server}/get/all`, {
        headers:{
            token:token,
        }
    });
    // userData.current = response.data;
    //console.log(response.data.data);
    const {name, email}  = response.data.data;
    userRef.current = name;
    userEmailRef.current = email;
    setUserName(name);
    userSubs.current = response.data.data.subjects;
    }
    catch(e){
        toast.error("Newtork Error, Try reloading the page..");
    }
   }
}
//UseEffect to call when user comes for first time to verify wether he has alreay loged in or not.
useEffect(()=>{
    verifyUser();
}, []);
    return (
        <UserContext.Provider value={{isAuth,UserLogin, UserSignUp, user:userRef.current, userEmail: userEmailRef.current,userName,userSubs, getUserData}}>{children}</UserContext.Provider>
    )
}

export const UserData = ()=>useContext(UserContext);