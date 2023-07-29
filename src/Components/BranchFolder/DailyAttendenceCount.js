import React from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import DateTimePicker from "../../DateTimePicker/DateTimePicker";
import CloseIcon from "@mui/icons-material/Close";

const DailyAttendenceCount = (props) => {
  const { dialogOpen, dialogClose } = props;

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
          Daily Attendence Count
        </DialogContent>
        <Box textAlign={"center"}>
          <Typography variant="h5" sx={{ mr: 3, ml: 3 }}>
            Morning Attendence : 0{" "}
          </Typography>
          <DateTimePicker />
        </Box>
        <Button
          variant="contained"
          sx={{ marginLeft: 5, marginRight: 5, marginTop: 2, marginBottom: 2 }}
        >
          Get Attendence
        </Button>
        <Box textAlign={"center"}>
          <Typography variant="h5" sx={{ mr: 3, ml: 3 }}>
            Evening Attendence : 0{" "}
          </Typography>
          <DateTimePicker />
        </Box>
        <Button
          variant="contained"
          sx={{ marginLeft: 5, marginRight: 5, marginTop: 2, marginBottom: 2 }}
        >
          Get Attendence
        </Button>
      </Dialog>
    </>
  );
};

export default DailyAttendenceCount;
