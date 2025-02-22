import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box } from "@mui/material";
import { Menu as MenuIcon, Home, Dashboard, Settings } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeComp from "./subcomponents/HomeComp";
import NewClassCpm from "./subcomponents/NewClassCpm";
import AllClasses from "./subcomponents/AllClasses";
import Profile from "./subcomponents/Profile";
import { UserData } from "../Context/UserContext";
import {useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
const drawerWidth = 240;

export default function HomePage() {
    const [active, setActive] = useState("Home");
    const [open, setOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const {isAuth, UserLogin, userEmail,getUserData} = UserData();
    const navigator = useNavigate();
    useEffect(()=>{
        if(isAuth === false){
            navigator("/login");
        }
      
    }, [isAuth]);
    useEffect(()=>{
        if(isAuth){
            getUserData();
        }
        
    }, []);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          if (window.innerWidth <= 400) {
            setOpen(true); 
          } else {
            setOpen(false);
          }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      });
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton color="inherit" edge="start"  sx={{ mr: 2 }} onClick={()=>{setOpen(!open)}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Self Attandance
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            {!open &&
                        <Drawer variant="permanent" sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box"},
            }}>
                <Toolbar /> {/* Keeps content below AppBar */}
                <List>
                    <ListItem button key={"Home"} onClick={(e) => setActive("Home")}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem button key={"Add new Class"} onClick={(e) => setActive("NewClass")}>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Add new Class"} />
                    </ListItem>
                    <ListItem button key={"All Classes"} onClick={(e) => setActive("All")}>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary={"All Classes"} />
                    </ListItem>
                    <ListItem button key={"Profile"} onClick={(e) => setActive("Profile")}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Profile"} />
                    </ListItem>
                </List>
            </Drawer>
             }
            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3   }}>
                <Toolbar /> {/* Space for AppBar */}
                {active === "Home" ? (
                    <HomeComp />
                ) : active === "NewClass" ? (
                    <NewClassCpm />
                ) : active === "All" ? (
                    <AllClasses />
                ) : (
                    <Profile />
                )}


            </Box>
        </Box>
    );
}
