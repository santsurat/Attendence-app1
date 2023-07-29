import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import DialogByName from "./EnquiryByName";
import DialogByID from "./EnquiryById";
import DialogBranchAttendenceForm from "./BranchAttendenceForm";
import DailyAttendenceCount from "./DailyAttendenceCount";
import ExcelSheetReport from "./ExcelSheetReport";
import Divider from "@mui/material/Divider";
import eqnuiryLogo from "../../assets/Image/animation_lkicdlak_small.gif";
import Attendencelogo from "../../assets/Image/animation_lkiclvxc_small.gif";
// import Qrlogo from "../../assets/Image/animation_lkiczb4n_small.gif";
import Countlogo from "../../assets/Image/animation_lkidnl82_small.gif";
import Excellogo from "../../assets/Image/animation_lkidsnoj_small.gif";
import { Box } from "@mui/material";

const BranchAttendence = () => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBranchAttendenceForm, setIsBranchAttendenceForm] = useState(false);
  const [isDaliyCount, setIsDailyCount] = useState(false);
  const [isExcelReport, setIsExcelReport] = useState(false);

  return (
    <>
      <div className="bgCard">
        <div className="branchHeading">
          <h1 style={{fontSize:'38px'}}>BranchAttendence</h1>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="enquiryCard">
            <img
              style={{ height: "50%", width: "100%", borderRadius: "5px" }}
              src={eqnuiryLogo}
              alt="enquiry"
            />
            <h3>Enquiry detail</h3>

            <Divider sx={{ mt: 8 }} />
            <Box  sx={{cursor:'pointer'}} display="flex"
              ml={"1rem"}
              gap={"3rem"}
              mt={"1rem"}
              color={"#338bd2"}
            >
              <h4 onClick={() => setIsOpen(true)}>Search By Name</h4>
              <h4 onClick={() => setIsEnquiryOpen(true)}>Search By Id</h4>
            </Box>
          </div>

          <div className="markAttendence">
            <img
              style={{ height: "50%", width: "100%", borderRadius: "5px" }}
              src={Attendencelogo}
              alt="Attendencelogo"
            />
            <h3>Mark Attendence by Branch No / UID or Manual</h3>

            <Divider sx={{ mt: 5 }} />
            <h4
              className="btnforMark"
              onClick={() => setIsBranchAttendenceForm(true)}
            >
              Mark Attendence
            </h4>
          </div>
          {/* <div className="markAttendence">
            <img
              style={{ height: "50%", width: "100%", borderRadius: "5px" }}
              src={Qrlogo}
              alt="Qrscanner"
            />
            <h3>Branch Attendence With QR Scanner</h3>
            <Divider sx={{ mt: 5 }} />
            <h4 className="btnforMark">Mark Attendence</h4>
          </div> */}
          <div className="markAttendence">
            <img
              style={{ height: "50%", width: "100%", borderRadius: "5px" }}
              src={Countlogo}
              alt="Count"
            />
            <h3>Daily Attendence Count</h3>
            <Divider sx={{ mt: 7.5 }} />
            <h4 className="btnforMark" onClick={() => setIsDailyCount(true)}>
              Instant Attendence
            </h4>
          </div>
          <div className="markAttendence">
            <img
              style={{ height: "50%", width: "100%", borderRadius: "5px" }}
              src={Excellogo}
              alt="Excel-icon"
            />

            <h3>Excel Sheet For Regular Attendence</h3>

            <Divider sx={{ mt: 7.5 }} />
            <h4 className="btnforMark" onClick={() => setIsExcelReport(true)}>
              Get Excel Report
            </h4>
          </div>
        </div>
        <DialogByName dialogOpen={isOpen} dialogClose={setIsOpen} />
        <DialogByID dialogOpen={isEnquiryOpen} dialogClose={setIsEnquiryOpen} />
        <DialogBranchAttendenceForm
          dialogOpen={isBranchAttendenceForm}
          dialogClose={setIsBranchAttendenceForm}
        />
        <DailyAttendenceCount
          dialogOpen={isDaliyCount}
          dialogClose={setIsDailyCount}
        />
        <ExcelSheetReport
          dialogOpen={isExcelReport}
          dialogClose={setIsExcelReport}
        />
      </div>
    </>
  );
};

export default BranchAttendence;
