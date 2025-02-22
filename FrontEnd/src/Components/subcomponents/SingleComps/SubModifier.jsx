import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import EditSub from './EditSub';
import { UseSubject } from '../../../Context/SubjectContext';
import toast from 'react-hot-toast';
export default function SubjectCard({_id,subName,teacherName,percentageRequired,absent,present}) {
  const {DeleteSubject} = UseSubject();
  var percentage = 100;
    const total = Number(present) + Number(absent);
    if(total != 0){
      const num = (Number(present)/total)*100;
      percentage = Number(num.toFixed(1));
    }
    const handleSubDel = async()=>{
      try{
        console.log("req, received");
         DeleteSubject(_id);
        toast.success("subject deleted");
        window.location.reload();

      }catch(e){
        toast.error("error deleting subject");
      }
    }
  return (
    <Card variant="solid" color="primary" invertedColors sx={{width:"300px", margin:"20px"}}>
      <CardContent orientation="horizontal">
        <CardContent sx={{display:"flex", flexDirection:"row"}}>
          <CardContent>
          <Typography level="h3">{subName} </Typography>
          <Typography level="body-md">{teacherName}</Typography>
          </CardContent>
          <CardContent>
            
            <Typography variant='h5'>Total: {present+absent}</Typography>
            <Typography>present: {present}</Typography>
            <Typography>%Attandance:{percentage}</Typography>
            <Typography>required %: {percentageRequired}</Typography>
          </CardContent>
        </CardContent>
      </CardContent>
      <CardActions>
       <EditSub _id= {_id} subName = {subName} CurrteacherName = {teacherName} percentageRequired = {percentageRequired} absent = {absent} present = {present}></EditSub>
        <Button size="sm" sx={{color:"red"}} onClick={handleSubDel}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
