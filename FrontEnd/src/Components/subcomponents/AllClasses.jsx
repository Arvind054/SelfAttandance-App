import React from 'react'
import SubModifier from './SingleComps/SubModifier'
import { UserData } from '../../Context/UserContext';
import { Typography } from '@mui/material';
const AllClasses = () => {
  const {userSubs}  = UserData();
  const data = userSubs.current;
  return (
    <div>
      <Typography variant='h4'>
      All classes.
      </Typography>
      <div className="dataContainer" style={{display:"flex", flexWrap:"wrap"}}>
                {(!data || data.length === 0) && "No Classes Added ,Yet"}
              {data && data.map((element, index)=>{
                const { subName,teacherName,PercentageRequires,absent, present, _id} = element;
                
                return (
                <SubModifier _id={_id} 
                subName={subName}
                teacherName={teacherName}
                percentageRequired={PercentageRequires}
                absent={absent}
                present={present}></SubModifier>
                )
              })}
                </div>
    </div>
  )
}

export default AllClasses
