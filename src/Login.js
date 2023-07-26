import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Logo from "./assets/Image/Rslogo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // useEffect(() => {
  //   const email=localStorage.getItem('email');
  //      const password = localStorage.getItem("password");
  //      if(email === "" && password === ""){
  //       navigate('/login')
  //      }
  // }, [])

  const handleLogin = () => {
    if (email === "ups2306@yopmail.com" && password === "Pass@1234") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      console.log(email, password);
      navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
    <div className="bodyBackground">
          <img className="rsLogo" src={Logo} alt="Logo" />
    
        <div className="cardContainer">
          <h1 className="label">AdanBagh Attendence Management System</h1>
          <form class="formGroup">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
              placeholder="Password"
            />
            <br />
            <button type="button" onClick={handleLogin} className="button">
              Login
            </button>
          </form>
        </div>
      </div>
     
    </>
  );
};

export default LoginPage;
