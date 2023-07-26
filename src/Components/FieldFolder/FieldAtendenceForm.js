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

const FieldAttendenceForm = (props) => {
  const { dialogOpen, dialogClose } = props;
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [selectedText, setSelectedText] = useState(null);
  const [box3, setBox3] = useState(false);
  const [branchNumber, setBranchNumber] = useState("");
  const [fieldNumber, setFieldNumber] = useState("");

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
      backgroundColor: isSelected ? "#2787d6" : "white",
      borderColor: isSelected ? "#2787d6" : "black",
    };
  };

  return (
    <>
      <Dialog open={dialogOpen}>
        <DialogContent
          sx={{
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
            fontSize: "large",
          }}
        >
          FieldAttendenceForm
        </DialogContent>
        <Box flexDirection={"row"} marginLeft={1.9}>
          <FormControlLabel
            control={<Checkbox checked={box1} onChange={handleCheckbox1} />}
            label="Jigyashu."
          />
          <FormControlLabel
            sx={{ marginLeft: 1 }}
            control={<Checkbox checked={box2} onChange={handleCheckbox2} />}
            label="Initiated"
          />
       
        </Box> 
        <TextField
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
          placeholder="Full Name"
        />

        <TextField
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
          placeholder="Branch Number (Optional)"
        //   value={branchNumber}
        //   setValue={setBranchNumber}
        />
        <TextField
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
          placeholder="Father's Name (Optional)"
        />

        <TextField
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
          placeholder="Field Number (Optional)"
        //   value={fieldNumber}
        //   setValue={setFieldNumber}
        />

        <Button
          variant="contained"
          onClick={() => dialogClose(false)}
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        >
          Search
        </Button>
      </Dialog>
    </>
  );
};

export default FieldAttendenceForm;
