import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UseSubject } from '../../../Context/SubjectContext';
export default function FloatingSub({subjectId}) {
    const {MarkAttandance} = UseSubject();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("1");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMarkAttandance = ()=>{
        MarkAttandance(subjectId, value);
        setOpen(false);
    }
    

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Mark Attandance
            </Button>
            <Dialog
                fullWidth={"sm"}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Mark Attandance for subject</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        Selcet Present Or Absent 👉
                       <select name="" id="Mark Attandance" style={{padding:"5px", margin: "5px", borderRadius:"10px"}} onChange={(e)=>setValue(e.target.value)}>
                        <option value="1">Present</option>
                        <option value="0">Absent</option>
                       </select>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleMarkAttandance}>ADD</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
