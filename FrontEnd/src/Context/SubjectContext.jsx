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
  async function EditSubject(_id,subjectName,teacherName,percentageReq,presentCnt,absentCnt){
   try{
      const response = await axios.post(`${server}/subject/edit`, {
        params:{
          _id: _id,
          subjectName:subjectName,
          teacherName:teacherName,
          percentageReq:percentageReq,
          presentCnt:presentCnt,
          absentCnt:absentCnt,
        }
      });
      toast.success("changes Saved");
      getUserData();
   }catch(e){
    toast.error("error Updating subject, try Again");
   }
  }
  async function DeleteSubject(_id){

    try{
       const response = await axios.delete(`${server}/subject/delete`, {
        params:{
          id: _id,
          email: userEmail,
        }
       });
       getUserData();
    }
    catch(e){
      toast.error("Error Deleting subject");
    }
  }
    return (
        <SubjectContext.Provider value={{AddSubject,MarkAttandance, EditSubject, DeleteSubject}}>{children}</SubjectContext.Provider>
    )
}

export const UseSubject = ()=> useContext(SubjectContext);