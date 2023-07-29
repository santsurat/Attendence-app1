import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import DateTimePicker from "../../DateTimePicker/DateTimePicker";
import CloseIcon from "@mui/icons-material/Close";

const ExcelSheetReport = (props) => {
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
          Excel Sheet Report
        </DialogContent>
        <Box textAlign={"center"}>
          <Box>
            <Typography variant="h5">Today Attendence </Typography>
            <DateTimePicker />
            <Button
              variant="contained"
              sx={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Get Excel (Morning)
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Get Excel (Evening)
            </Button>
          </Box>

          <Box>
            <Typography variant="h5">Monthly/Weekly Attendence </Typography>
            <DateTimePicker />
            <Button
              variant="contained"
              sx={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Get Excel (Morning)
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Get Excel (Evening)
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default ExcelSheetReport;
