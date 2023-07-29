import React,{useState} from "react";
import { Box, Button, Checkbox, Dialog, DialogContent, TextField, Typography,} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const DailyAttendenceCount = (props) =>{
  const {dialogOpen,dialogClose} = props;
  
  return(
    <>
    <Dialog open={dialogOpen} >
      <DialogContent sx={{textAlign:'center',backgroundColor:'blue',color:'white',fontSize:'large'}} >DailyAttendenceCount <CloseIcon onClick={() => dialogClose(false)}/></DialogContent>
       <Box>
        <Typography variant="h5" sx={{mr:3,ml:3}}>Morning Attendence : 0 </Typography>
       </Box>
       <Button variant="contained"  sx={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:2}} >Get Attendence</Button>
       <Box>
        <Typography variant="h5" sx={{mr:3,ml:3}}>Evening Attendence : 0 </Typography>
       </Box>
     <Button variant="contained"  sx={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:2}} >Get Attendence</Button>
   
    </Dialog>
    </>
  )
}



export default DailyAttendenceCount;
