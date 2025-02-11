import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { UseSubject } from '../../Context/SubjectContext';
const NewClassCpm = () => {
  const [subject, setSubject] = useState("");
  const [Teacher, setTeacher] = useState("");
  const [required, setRequired] = useState(null);
  const {AddSubject} = UseSubject();
  return (
    <div className='AddSubContainer'>
      <h2 >Add New Subject</h2>
      <div className="AddSubInputs">
       <TextField id="standard-basic" label = "Subject Name" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
       <TextField id="standard-basic" label = "Teacher Name" value={Teacher} onChange={(e)=>setTeacher(e.target.value)}/>
       <TextField id="standard-basic" label = "Percentage Required" type='number' value={required} onChange={(e)=>setRequired(e.target.value)}/>
        <Button variant="contained" onClick={()=>{AddSubject(subject, Teacher, required)}}>Add</Button>
        </div>
     </div>
  )
}

export default NewClassCpm
