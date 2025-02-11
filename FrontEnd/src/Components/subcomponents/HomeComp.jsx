import React, { useEffect, useState } from 'react'
import {Typography} from '@mui/material'
import { UserData } from '../../Context/UserContext'
import SubjectCard from './SingleComps/subjectCard'
const HomeComp = () => {
  const {user, userName, userSubs} = UserData();
  const data = userSubs.current;
  
  return (
    <>
     <Typography variant="h4">Welcome Back, {userName} 👋</Typography>
     <div className="HomePageContainer">
        <h3>Dashboard</h3>
        <div className="dataContaoner" style={{display:"flex", flexWrap:"wrap"}}>
          {(!data || data.length === 0) && "No Classes Added ,Yet"}
        {data && data.map((element, index)=>{
          const { subName,teacherName,PercentageRequires,absent, present, _id} = element;
          
          return (
          <SubjectCard _id={_id} 
          subName={subName}
          teacherName={teacherName}
          percentageRequired={PercentageRequires}
          absent={absent}
          present={present}></SubjectCard>
          )
        })}
          </div>
     </div>
    </>
  )
}

export default HomeComp
