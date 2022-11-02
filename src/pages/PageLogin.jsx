import React , { useState, useEffect }from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import logodepartment from "../img/logo/logodepartment.png";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link ,useNavigate } from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {ToastContainer ,toast,Zoom} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"



const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ffffff'),
    backgroundColor: "#ffffff",
    '&:hover': {
      backgroundColor: "#8C61FF",
    },
  }));







function PageLogin() {

  const navigate = useNavigate();
  const [Email ,setEmail] = useState(''); 
  const [Password , setPassword] = useState('');
  const [alerts, setAlerts] = useState(false);


  const login = async () => {
    if(Email === "" || Password === ""){
          setAlerts(true);
          toast.error("กรุณาใส่EmailหรือPasswordให้เรียบร้อยเรียบร้อย");
    }else{
      let result = await fetch(`${process.env.REACT_APP_API_URL}/login` , {
        method: 'POST',
        body:JSON.stringify({Email,Password}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result = await result.json();
      // console.log(result.token);
      // localStorage.setItem("TokenUser",JSON.stringify(result))
      if(result.token){
   
        console.log(result.token)
        navigate("/PageHome")
            localStorage.setItem("user",JSON.stringify(result))
            
      }else{
        console.log("Not Found!")
      }
    }
    
  }

  return (
    <div>
      <Navbar />
      {alerts ? <ToastContainer draggable={false} transition={Zoom} autoClose={3000} /> : <></> }
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            top: "50%",
            left: "50%",
            background: "#6592FD",
            width: "100%",
            maxWidth: 700,
            height: "100%",
            maxHeight: 400,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            borderRadius: "10px",
            borderStyle: "solid",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "24px" }}
            >
              เข้าสู่ระบบ
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
             
            
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box>
                <img
                  src={logodepartment}
                  alt="img"
                  style={{ width: "200px", height: "200px" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
                <Box sx={{padding:'10px', width: "100%",}}>
                <CssTextField fullWidth label="E-mail RTAF" id="fullWidth" placeholder="(ไม่ต้องใส่ @ rtaf.mi.th)" required onChange={(event) => {setEmail(event.target.value)}} />
                </Box>
                <Box sx={{padding:'10px', width: "100%",}}>
                <CssTextField fullWidth label="Password" id="fullWidth" onChange={(event) => {setPassword(event.target.value)}}  required />
                </Box>
                <Box sx={{display: "flex"}}>
                    <Box sx={{margin:'10px'}}>
                   
                    <ColorButton startIcon={<LockOpenIcon />} variant="contained" onClick={()=>login()}>Sign In</ColorButton>
                   
                    </Box>
                    <Box sx={{margin:'10px'}}>
                    <Link to="/PageSignUp" style={{ textDecoration: "none" }}>
                    <ColorButton startIcon={<PersonAddIcon />} variant="contained">Sign Up</ColorButton>
                    </Link>
                    </Box>
                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default PageLogin;
