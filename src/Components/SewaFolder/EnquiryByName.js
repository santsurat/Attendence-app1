import React,{useState} from "react";
import { Box, Button, Checkbox, Dialog, DialogContent, TextField, Typography,} from "@mui/material";
// import EnquiryByName from "../BranchFolder/EnquiryByName";

const EnquiryByName = (props) =>{
  const {dialogOpen,dialogClose} = props;
  
  return(
    <>
    <Dialog open={dialogOpen} >
      <DialogContent sx={{textAlign:'center',backgroundColor:'blue',color:'white',fontSize:'large'}} >SewaAttendenceForm</DialogContent>
    <TextField sx={{marginLeft:5,marginRight:5,marginTop:2}} placeholder="Full Name"/>
    <TextField sx={{marginLeft:5,marginRight:5,marginTop:2}} placeholder="Father's Name"/>
  
    <Button variant="contained" onClick={() => dialogClose(false)} sx={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:2}} >Search</Button>
    <Box  margin={4}>
      <Typography>
      Full Name :-
      </Typography>
      <Typography>
      Father's Name : -
      </Typography>
      <Typography>
      Branch Number : -
      </Typography>
      <Typography>
      UID Number : -
      </Typography>
      <Typography>
        Satsangi Type : - 
      </Typography>
      
      
    </Box>
    </Dialog>
    </>
  )
}



export default EnquiryByName;
