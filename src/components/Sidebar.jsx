import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../img/logo/logo.gif'
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import Tooltip from '@mui/material/Tooltip';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import PageParcelList from '../pages/PageParcelList'
import PageHome from '../pages/PageHome'
import PageViewItem from '../pages/PageViewItem'
import PageApproveItem from '../pages/PageApproveItem'
import PageReport from '../pages/PageReport'
import PageManage from '../pages/PageManage'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"#2B2785"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img style={{width:'45px',height:'40px',margin:'10px'}} src={logo} alt="img" />
          <Typography variant="subtitle1" sx={{color: '#ffffff',fontWeight: 'bold',fontSize: '24px'}}>
           ระบบเบิกจ่ายพัสดุ
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{
        sx: {
          height: '100vh',
          backgroundColor: "#6592FD"
        }
      }}>
        <DrawerHeader style={{backgroundColor:'#ffffff'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{backgroundColor:'#000'}} />
        <Link exact to="/PageHome" style={{ textDecoration: "none", color: "black" }} >
        <List sx={{backgroundColor:'#ffffff',color:'#000000'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <Tooltip title="Home">
              <HomeIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></HomeIcon>
              </Tooltip>
              <ListItemText
                primary="HOME"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider />
          <Divider sx={{backgroundColor:'#000'}} />
          <Link to="/PageParcelList" style={{ textDecoration: "none", color: "black" }}>
          <List sx={{backgroundColor:'#ffffff',color:'#000000'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
               <Tooltip title="รายการพัสดุ">
              <EmojiObjectsIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></EmojiObjectsIcon>
              </Tooltip>
              <ListItemText
                primary="รายการพัสดุ"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider sx={{backgroundColor:'#000'}}/>
          <Link to="/PageViewItem" style={{ textDecoration: "none", color: "black" }}>
          <List sx={{backgroundColor:'#ffffff',color:'#000000'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
               <Tooltip title="ดูรายการที่เบิก">
              <ListAltIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></ListAltIcon>
              </Tooltip>
              <ListItemText
                primary="ดูรายการที่เบิก"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider sx={{backgroundColor:'#000'}}/>
          <Link to="/PageApproveItem" style={{ textDecoration: "none", color: "black" }}>
          <List sx={{backgroundColor:'#ffffff',color:'#000000'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
               <Tooltip title="อนุมัติการขอเบิก">
              <CheckCircleIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></CheckCircleIcon>
              </Tooltip>
              <ListItemText
                primary="อนุมัติการขอเบิก"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider sx={{backgroundColor:'#000'}}/>
          <Link to="/PageReport" style={{ textDecoration: "none", color: "black" }}>
          <List sx={{backgroundColor:'#ffffff',color:'#000000'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
               <Tooltip title="รายงาน">
              <ReportIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></ReportIcon>
              </Tooltip>
              <ListItemText
                primary="รายงาน"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider sx={{backgroundColor:'#000'}}/>
          <Link to="/PageManage" style={{ textDecoration: "none", color: "black" }}>
          <List sx={{backgroundColor:'#ffffff',color:'#000000'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
               <Tooltip title="จัดการสมาชิก">
              <ManageAccountsIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></ManageAccountsIcon>
              </Tooltip>
              <ListItemText
                primary="จัดการสมาชิก"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider sx={{backgroundColor:'#000'}}/>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <List sx={{backgroundColor:'red',color:'#ffffff'}}>
            <ListItemButton
              sx={{
                height: 50,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
               <Tooltip title="Log out">
              <LogoutIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              ></LogoutIcon>
              </Tooltip>
              <ListItemText
                primary="Log out"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </List>
          </Link>
          <Divider sx={{backgroundColor:'#000'}}/>
      </Drawer>
      
      <Box  sx={{ height:'100vh' ,width:'100vw' ,background:'#5F59F7',color:'#FFFFFF' }}>
        <DrawerHeader />
        
       {
          location.pathname === "/PageHome" ? (<PageHome />) 
        : location.pathname === "/PageParcelList" ? (<PageParcelList />) 
        : location.pathname === "/PageViewItem" ? (<PageViewItem />) 
        : location.pathname === "/PageApproveItem" ? (<PageApproveItem />) 
        : location.pathname === "/PageReport" ? (<PageReport />) 
        : location.pathname === "/PageManage" ? (<PageManage />) 
        : ''
       }
      </Box>
    </Box>
  );
}
