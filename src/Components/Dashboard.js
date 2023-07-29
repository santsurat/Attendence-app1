import React  from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// import About from "./About";
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Logo from '../assets/Image/Rslogo.png'
import icon from '../assets/Image/icon.png'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const DashboardPage = () => {
  const settings = [
    {
      name: "setting",
      property: "User Setting",
    },
    { name: "logout",
     property: "Logout" 
    }
  ];
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.setItem("email", "");
  //   localStorage.setItem("password", "");
  //   navigate("/login");
  // };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleLogout = (setting) => {
    console.log(setting)
    if(setting.name === "logout"){
      localStorage.setItem("email", "");
    localStorage.setItem("password", "");
    navigate("/login");
    }
  };

  const handleCloseUserMenu = (event, reason) => {
    if(reason ==="backdropClick"){
      setAnchorElUser(null);
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
       <Link to='/'> <img className="Rslogo" src={Logo} alt="Logo"  /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
        <Link style={{textDecoration:'none'}} to="/"  >{<HomeIcon fontSize="large" titleAccess="Home" color="disabled" />}</Link>
          </li>
        
          <li>
            <Link to="About" style={{textDecoration:'none'}}>{<PsychologyAltIcon fontSize="large" titleAccess="About Us" color="disabled"/>}</Link>
          </li>
          <li>
            <Link to="Contact" style={{textDecoration:'none'}}>{<ContactPageIcon fontSize="large" titleAccess="Contact Us" color="disabled"/>}</Link>
          </li>
          <Box sx={{ flexGrow: 0,}}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ fontSize:'large',mt:0.5 }}>
                <Avatar sx={{marginLeft:"0.5rem"}} alt="Remy Sharp" src={icon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={anchorElUser}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={() =>handleLogout(setting)}>
                  <Typography textAlign="center">{setting.property}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </ul>
      </div>
    </div>
  );
};

  

  export default DashboardPage;