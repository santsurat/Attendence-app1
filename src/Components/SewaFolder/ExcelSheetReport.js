import React,{useState} from "react";
import { Box, Button, Checkbox, Dialog, DialogContent, TextField, Typography,} from "@mui/material";

const ExcelSheetReport = (props) =>{
  const {dialogOpen,dialogClose} = props;
  
  return(
    <>
    <Dialog open={dialogOpen} >
      <DialogContent sx={{textAlign:'center',backgroundColor:'blue',color:'white',fontSize:'large'}} >ExcelSheetReport</DialogContent>
       <Box textAlign={'center'}>
       <Box >
        <Typography variant="h5" sx={{mr:3,ml:3}}>Today Attendence </Typography>
        <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:15,marginRight:15,marginTop:2,marginBottom:2}} >Get Excel (Morning)</Button>
        <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:15,marginRight:15,marginTop:2,marginBottom:2}} >Get Excel (Evening)</Button>
       </Box>
      
       <Box>
        <Typography variant="h5" sx={{mr:3,ml:3}}>Monthly/Weekly Attendence </Typography>
        <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:15,marginRight:15,marginTop:2,marginBottom:2}} >Get Excel (Morning)</Button>
        <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:15,marginRight:15,marginTop:2,marginBottom:2}} >Get Excel (Evening)</Button>
       </Box>
       </Box>
    </Dialog>
    </>
  )
}



export default ExcelSheetReport;
