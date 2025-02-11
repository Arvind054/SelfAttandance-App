import { createContext, useContext } from "react";
import axios from "axios";
import server from "../server";
import { UserData } from "./UserContext";
import toast from "react-hot-toast";
const SubjectContext = createContext();
export const SubjectProvider = ({children})=>{
    const {user, userEmail,getUserData} = UserData();


  async function AddSubject(subject, Teacher, PercentageRequired){
    if(!subject || !Teacher || !PercentageRequired){
      toast.error("All fields are required");
      return ;
    }
    if(!userEmail){
      toast.error("Error Adding Subject, please try again");
      return ;
    }
      try{
        const token = localStorage.getItem('token');
        const response = await axios.post(`${server}/subject/new`, {
            params:{
               subject:subject,
               Teacher:Teacher,
               PercentageRequired:PercentageRequired,
               email:userEmail,
            }
        });
         toast.success("Subject Added");
        getUserData();
    }
    catch(e){

    }
  }
  async function MarkAttandance(subjectId, value){
    console.log("req, receivec", subjectId, value);
       try{
            const response  = await axios.post(`${server}/subject/mark`,{
              params:{
                email:userEmail,
                subjectId: subjectId,
                value: value,
              }
            });
            getUserData();
       }catch{
          toast.error("Error While Marking, please Try again");
       }
  }
    return (
        <SubjectContext.Provider value={{AddSubject,MarkAttandance}}>{children}</SubjectContext.Provider>
    )
}

export const UseSubject = ()=> useContext(SubjectContext);