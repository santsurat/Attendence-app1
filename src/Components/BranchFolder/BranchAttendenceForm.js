import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  Fab,
  FormControlLabel,
} from "@mui/material";
import DateTimePicker from "../../DateTimePicker/DateTimePicker";
import CloseIcon from '@mui/icons-material/Close';



const BranchAttendenceForm = (props) => {
  const { dialogOpen, dialogClose } = props;
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [selectedText, setSelectedText] = useState(null);
  const [box3, setBox3] = useState(false);
  const [branchNumber, setBranchNumber] = useState("");
  const [uidNumber, setuidNumber] = useState("");

  const handleCheckbox1 = () => {
    if (!box1) {
      setBox1(true);
      setBox2(false);
      setBox3(false);
    }
  };

  const handleCheckbox2 = () => {
    if (!box2) {
      setBox2(true);
      setBox1(false);
      setBox3(false);
    }
  };
  const handleCheckbox3 = () => {
    if (!box3) {
      setBox3(true);
      setBox1(false);
      setBox2(false);
    }
  };
  const handleTextClick = (textId) => {
    if (selectedText === textId) {
      resetText();
    } else {
      changeText(textId);
    }
  };
  
  const changeText = (textId) => {
    setSelectedText(textId);
  };
  
  const resetText = () => {
    setSelectedText(null);
  };
  
  const getTextStyle = (textId) => {
    const isSelected = selectedText === textId;
    return {
      backgroundColor: isSelected ? '#2787d6' : 'white',
      borderColor: isSelected ? '#2787d6' : 'black'
    };
  };

  return (
    <>
      <Dialog open={dialogOpen} >
      <div style={{backgroundColor: "blue",display : "flex",justifyContent : "end"}}>
      <CloseIcon style={{top : 0,cursor : "pointer",color : "wheat"}}onClick={() => dialogClose(false)} />
        </div>
        <DialogContent
          sx={{
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
            fontSize: "large",
          }}
        >
          Branch Attendence Form
     
        </DialogContent>
        <Box flexDirection={"row"} marginLeft={1.9}>
          <FormControlLabel
            control={<Checkbox checked={box1} onChange={handleCheckbox1} />}
            label="Branch No."
          />
          <FormControlLabel sx={{marginLeft:1}}
            control={<Checkbox checked={box2} onChange={handleCheckbox2} />}
            label="UID"
          />
          <FormControlLabel sx={{marginLeft:1.6}}
            control={<Checkbox checked={box3} onChange={handleCheckbox3} />}
            label="Manual"
          />
        </Box>
        <Box display={'flex'} margin={1} gap={1}>
        <Typography  onClick={() => handleTextClick('text1')} >
        <Fab variant="extended" size="small"  style={getTextStyle('text1')}>
          jigyasu
        </Fab>
        </Typography>
        <Typography onClick={() => handleTextClick('text2')}>
        <Fab variant="extended"  size="small" style={getTextStyle('text2')}>
          Initiated
        </Fab>
        </Typography>
        <Typography onClick={() => handleTextClick('text3')}>
        <Fab variant="extended"  size="small" style={getTextStyle('text3')} >
          Student
        </Fab>
        </Typography>
        <Typography onClick={() => handleTextClick('text4')}>
        <Fab variant="extended"  size="small" style={getTextStyle('text4')} >
          Others
        </Fab>
        </Typography>
        </Box>
        {box1 && (
          <TextField
            sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
            placeholder="Branch Number"
            value={branchNumber}
            setValue={setBranchNumber}
          />
        )}

        {box2 && (
          <TextField
            sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
            placeholder="UID Number"
            value={uidNumber}
            setValue={setuidNumber}
          />
        )}
        {box3 && (
          <>
            <TextField
              sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
              placeholder="Full Name"
            />
            <TextField
              sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
              placeholder="Father's Name"
            />
            <Box  ml={2} mt={2} alignSelf={'center'} >
           <DateTimePicker/>
           {/* <Button
          variant="contained"
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        >
          Submit
        </Button> */}
           </Box>
          </>
        )}
        <Button
          variant="contained"
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        >
          Search
        </Button>
      </Dialog>
    </>
  );
};

export default BranchAttendenceForm;
