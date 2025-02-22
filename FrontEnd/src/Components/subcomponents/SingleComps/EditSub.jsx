import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { UseSubject } from '../../../Context/SubjectContext';
export default function EditSub({_id,subName,CurrteacherName,percentageRequired,absent,present}) {
    const {EditSubject} = UseSubject();
  const [open, setOpen] = React.useState(false);
  const [subjectName, setSubjectName] = React.useState(subName);
  const [teacherName, setTeacherName] = React.useState(CurrteacherName);
  const [percentageReq, setPercentageReq] = React.useState(percentageRequired);
  const [presentCnt, setPresentCnt] = React.useState(absent);
  const [absentCnt, setAbsentCnt] = React.useState(present);
  const handleEdit = ()=>{
    EditSubject(_id,subjectName,teacherName,percentageReq,presentCnt,absentCnt);
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Edit Subject"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{margin: "10px", display:"flex", flexDirection:"column",flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
            <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", gap:"5px", margin:"10px"}}>
             <TextField id="outlined-basic" label="Subject" variant="outlined" value={subjectName} onChange={(e)=>{setSubjectName(e.target.value)}}></TextField>
             <TextField id="outlined-basic" label="Teacher" variant="outlined" value={teacherName} onChange={(e)=>{setTeacherName(e.target.value)}}></TextField>
             </div>
            <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap", gap:"10px"}}>
             <TextField id="outlined-basic" label="Presents" variant="outlined" type='number' value={presentCnt} onChange={(e)=>{setPresentCnt(e.target.value)}}></TextField>
             <TextField id="outlined-basic" label="Absents" variant="outlined" type='number' value={absentCnt}
             onChange={(e)=>{setAbsentCnt(e.target.value)}}></TextField>
             </div>
             <TextField id="outlined-basic" label="Required %" variant="outlined" type='number' value={percentageReq} onChange={(e)=>setPercentageReq(e.target.value)} sx={{margin:"10px"}}></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEdit}>
             Submit
          </Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
