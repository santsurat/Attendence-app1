import React,{useState} from "react";
import { Box, Button, Checkbox, Dialog, DialogContent, TextField, Typography,} from "@mui/material";
import DateTimePicker from "../../DateTimePicker/DateTimePicker";

const DailyAttendenceCount = (props) =>{
  const {dialogOpen,dialogClose} = props;
  
  return(
    <>
    <Dialog open={dialogOpen} >
      <DialogContent sx={{textAlign:'center',backgroundColor:'blue',color:'white',fontSize:'large'}} >DailyAttendenceCount</DialogContent>
       <Box textAlign={'center'}>
        <Typography variant="h5" sx={{mr:3,ml:3}}>Morning Attendence : 0 </Typography>
        <DateTimePicker/>
       </Box>
       <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:2}} >Get Attendence</Button>
       <Box textAlign={'center'}>
        <Typography variant="h5" sx={{mr:3,ml:3}}>Evening Attendence : 0 </Typography>
        <DateTimePicker/>
       </Box>
     <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:2}} >Get Attendence</Button>
   
    </Dialog>
    </>
  )
}



export default DailyAttendenceCount;
