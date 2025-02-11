import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import FloatingSub from './FloatingSub';

export default function SubjectCard({_id ,subName,teacherName,percentageRequired ,absent,present}) {
  const total = Number(present)+ Number(absent);
  let precentage = 100;
  if(total != 0){
    precentage = (Number(present)/total)*100;
  }
  return (
    <Card variant="solid" color="primary" invertedColors sx={{width:"300px", margin:"20px"}}>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={precentage} >
        {precentage}% 
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">{subName}</Typography>
          <Typography level="h2">{present}/ {total}</Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        {/* <Button variant="soft" size="sm">
          View all classes
        </Button> */}
        <FloatingSub subjectId = {_id}></FloatingSub>
      </CardActions>
    </Card>
  );
}
