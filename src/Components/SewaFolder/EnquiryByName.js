import React,{useState} from "react";
import { Box, Button, Checkbox, Dialog, DialogContent, TextField, Typography,} from "@mui/material";
// import EnquiryByName from "../BranchFolder/EnquiryByName";
import CloseIcon from '@mui/icons-material/Close';


const EnquiryByName = (props) =>{
  const {dialogOpen,dialogClose} = props;
  
  return(
    <>
    <Dialog open={dialogOpen} >
    <div style={{backgroundColor: "blue",display : "flex",justifyContent : "end"}}>
      <CloseIcon style={{top : 0,cursor : "pointer",color : "wheat"}}onClick={() => dialogClose(false)} />
        </div>
      <DialogContent sx={{textAlign:'center',backgroundColor:'blue',color:'white',fontSize:'large'}} >Sewa Attendence Form </DialogContent>
    <TextField sx={{marginLeft:5,marginRight:5,marginTop:2}} placeholder="Full Name"/>
    <TextField sx={{marginLeft:5,marginRight:5,marginTop:2}} placeholder="Father's Name"/>
  
    <Button variant="contained"  sx={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:2}} >Search</Button>
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
