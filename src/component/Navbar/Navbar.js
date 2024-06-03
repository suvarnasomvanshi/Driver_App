import "./Navbar.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Breadcrumbs,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const App = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:1000px)");
  const pathLocation = useLocation()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    let timeout = setTimeout(() => {
      setAnchorEl(null);
    }, 3000);
    if (!anchorEl) clearTimeout(timeout)
  };
  const handleMenuClosed = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="app-bar"
        style={{ background: "#121212", padding: "10px", width:'100vw',display:"flex" , justifyContent:'center', alignItems:"center"}}
      >
        <Toolbar sx={{width:{lg:'1300px',md:'100%', xs:'100%'},maxWidth:'1300px'}} >
          <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            <img src="logodr.png" alt="img" style={{ height: '65px' }} onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/')
            }} />
          </Box>

          {isDesktop ? (
            <Breadcrumbs>
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/aboutus"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                About
              </NavLink>
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/careers"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Careers
              </NavLink>

              <NavLink
                onMouseOver={handleMenuOpen}
                onMouseLeave={handleMenuClose}
                style={({ isActive }) => ({
                  color: ['/businesses', '/inidividual'].includes(pathLocation.pathname) ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                  ,display:'flex',
                  alignItems:'center'
                })}
                onClick={() => {
                  setAnchorEl(null)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Services{" "}
                {anchorEl ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </NavLink>

              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/contactus"
                style={({ isActive }) => ({
                  color: isActive ? '#FB561E' : '#ffff',
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  textDecoration: 'none'
                })}
              >
                Contact
              </NavLink>


              <Button
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                  color: "#fff",
                  bgcolor: "#FB561E",
                  borderRadius: 10,
                  textTransform: 'none',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: '#FB461E'
                  },
                }}
                onClick={()=> window.open('https://play.google.com/store/apps/details?id=com.drivershaabb2b&pcampaignid=web_share')}
              >
                Download DriverShaab
              </Button>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} to="/inidividual">
                  Individual
                </MenuItem>
                <MenuItem to="/businesses">Businesses</MenuItem>
              </Menu>
            </Breadcrumbs>
          )
            : (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ ml: "auto", display: { sm: "block" }, }}
              >
                <MenuIcon sx={{ bgcolor: '#fb7500', fontSize: 25 }} />
              </IconButton>
            )}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClosed}
            sx={{
              "& .MuiList-root": {
                bgcolor: '#212121',
                width: '250px',

              }, pt: 2
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/inidividual");

              }}
              sx={{
                fontFamily: "Inter", fontWeight: 400, fontSize: "18px", bgcolor: '#212121', color: '#fff', "&:hover": {
                  bgcolor: '#919191', color: '#fff'
                }, borderBottom: '1px solid #d3d3d3'
              }}
            >
              Individual
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/businesses");

              }}
              sx={{
                fontFamily: "Inter", fontWeight: 400, fontSize: "18px", bgcolor: '#212121', color: '#fff', "&:hover": {
                  bgcolor: '#919191', color: '#fff'
                }
              }}
            >
              Businesses
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        className="drawer"
        sx={{
          "& .MuiPaper-root": {
            bgcolor: '#212121', color: '#f1f1f1'
          }
        }}
      >
        <List
          sx={{ width: '60vw', bgcolor: 'background.paper', bgcolor: '#212121', color: '#f1f1f1' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => {
            handleDrawerToggle();
            navigate("/");

          }}>
            <ListItemText >Home</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => {
            handleDrawerToggle();
            navigate("/aboutus");

          }}>
            <ListItemText>About</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => {
            handleDrawerToggle();
            navigate("/careers");

          }}>
            <ListItemText>Careers</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemText >Services</ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                handleDrawerToggle();
                navigate("/inidividual");

              }}>
                <ListItemText >Inidividual</ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                handleDrawerToggle();
                navigate("/businesses");

              }}>
                <ListItemText >Businesses</ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={() => {
            handleDrawerToggle();
            navigate("/contactus");

          }}>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default App;
