import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
export default function SubjectCard() {
  
  return (
    <Card variant="solid" color="primary" invertedColors sx={{width:"300px", margin:"20px"}}>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg"  determinate value={50}  >
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">{"SUbName"}</Typography>
          <Typography level="h2">TeacherName </Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button variant="soft" size="sm">
          Edit
        </Button>
        <Button size="sm" sx={{color:"red"}}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
