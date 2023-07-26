import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  Outlet,
  BrowserRouter,Routes,Route,Navigate,
} from "react-router-dom";
import './index.css';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import DashboardPage from './Components/Dashboard';
import About from "./Components/About";
import BranchAttendence from "./Components/BranchFolder/BranchAttendence";
import SewaAttendence from "./Components/SewaFolder/SewaAttendence";
import FieldAttendence from "./Components/FieldFolder/FieldAttendence";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import EnquiryByName from "./Components/BranchFolder/EnquiryByName";
import EnquiryById from "./Components/BranchFolder/EnquiryById";
import BranchAttendenceForm from "./Components/BranchFolder/BranchAttendenceForm";
import Footer from "./FooterFolder/Footer";



const PrivateRoutes = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  return (<>
    {(email  && password ) ? 
     <>
      <DashboardPage />
      <Outlet />
      <Footer/>
    </> :
    <Navigate to="/login" />
  }
  </>
  );
};


const AppLayout= () => {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/*" element={<Navigate to={"/"}/>}/>
    <Route path="/" element={<PrivateRoutes/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="branchattendence" element={<BranchAttendence/>}/>
      <Route path="sewaattendence" element={<SewaAttendence/>}/>
      <Route path="fieldattendence" element={<FieldAttendence/>}/>
      {/* <Route path="/enquirybyname" element={<EnquiryByName/>}/> */}
      <Route path="/branchattendenceform" element={<BranchAttendenceForm/>}/>
      {/* <Route path="/enquirybyid" element={<EnquiryById/>}/> */}
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)
}
createRoot(document.getElementById("root")).render(<AppLayout/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
