import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EnquiryById = (props) => {
  const { dialogOpen, dialogClose } = props;
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [branchNumber, setBranchNumber] = useState("");
  const [uidNumber, setuidNumber] = useState("");

  const handleCheckbox1 = () => {
    if (!box1) {
      setBox1(true);
      setBox2(false);
    }
  };

  const handleCheckbox2 = () => {
    if (!box2) {
      setBox2(true);
      setBox1(false);
    }
  };

  return (
    <>
      <Dialog open={dialogOpen}>
        <div
          style={{
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <CloseIcon
            style={{ top: 0, cursor: "pointer", color: "wheat" }}
            onClick={() => dialogClose(false)}
          />
        </div>
        <DialogContent
          sx={{
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
            fontSize: "large",
          }}
        >
          Enuiry By Id
        </DialogContent>
        <Box flexDirection={"row"} alignSelf={"center"}>
          <FormControlLabel
            control={<Checkbox checked={box1} onChange={handleCheckbox1} />}
            label="Branch No."
          />
          <FormControlLabel
            control={<Checkbox checked={box2} onChange={handleCheckbox2} />}
            label="UID"
          />
        </Box>
        {box1 && (
          <TextField
            sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
            placeholder="Branch Number"
            // value={branchNumber}
            // setValue={setBranchNumber}
          />
        )}

        {box2 && (
          <TextField
            sx={{ marginLeft: 2, marginRight: 2, marginTop: 2 }}
            placeholder="UID Number"
            // value={uidNumber}
            // setValue={setuidNumber}
          />
        )}

        <Button
          variant="contained"
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        >
          Search
        </Button>
        <Box margin={4}>
          <Typography>Full Name :-</Typography>
          <Typography>Father's Name : -</Typography>
          <Typography>Branch Number : -</Typography>
          <Typography>UID Number : -</Typography>
          <Typography>Satsangi Type : -</Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default EnquiryById;
