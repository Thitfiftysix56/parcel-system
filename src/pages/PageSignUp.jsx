import React , { useState, useEffect }from 'react'
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import { Link ,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Axios from 'axios'
import FormHelperText from '@mui/material/FormHelperText';
import {ToastContainer ,toast,Zoom} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#ffffff'),
  backgroundColor: "#ffffff",
  '&:hover': {
    backgroundColor: "#8C61FF",
  },
}));

const CssIFormControl = styled(FormControl)({
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

function PageSignUp() {
  const Ranks = [
    'นาย',
    'นาง',
    'จ.ต.',
    'จ.ต.หญิง',
   'จ.ท.',
     'จ.ท.หญิง',
   'จ.อ.',
     'จ.อ.หญิง',
     'พ.อ.ต.',
   'พ.อ.ต.หญิง',
    'พ.อ.ท.',
    'พ.อ.ท.หญิง',
    'พ.อ.อ.',
   'พ.อ.อ.หญิง',
    'ร.ต.',
   'ร.ต.หญิง',
   'ร.ท.',
    'ร.ท.หญิง',
     'ร.อ.',
   'ร.อ.หญิง',
     'น.ต.',
     'น.ต.หญิง',
   'น.ท.',
   'น.ท.หญิง',
   'น.อ.',
   'น.อ.หญิง',
     'พล.อ.ต.',
    'พล.อ.ต.หญิง',
     'พล.อ.ท.',
     'พล.อ.ท.หญิง',
   'พล.อ.อ.',
     'พล.อ.อ.หญิง',
   ];
const Departments = [
  'แผนกมาตรฐานซอฟต์แวร์',
  'แผนกวิเคราะห์และออกแบบซอฟต์แวร์'
]	


  const navigate = useNavigate();
  const [User,SetUser] = useState([]);
  const [Iduser,setIdUser] = useState(''); 
  const [Rank, setRank] = useState('');
  const [Name,setName] = useState('');
  const [LastName , setLastName] = useState('');
  const [Email ,setEmail] = useState(''); 
  const [Password , setPassword] = useState('');
  const [Division , setDivision] = useState('กองควบคุมมาตราฐาน');
  const [Position , setPosition] = useState('');
  const [Department , setDepartment] = useState('ศซว.ทอ.');
  const [alerts, setAlerts] = useState(false);

// console.log(Rank)
// function

const submit = () => {
  if(User === "" || Iduser === "" || Rank === "" || Name === "" || LastName === "" || Email === "" || Password === "" || Division === "" || Position === "" || Department === ""){
          setAlerts(true);
          toast.error("กรุณากรอกข้อมูลให้เรียบร้อยเรียบร้อย");
  }
  else{
    setAlerts(true);
    toast.success("สมัครสมาชิกเสร็จเรียบร้อย");
Axios.post(`${process.env.REACT_APP_API_URL}/PageSignUp`,{
  Iduser:Iduser,
  Rank:Rank,
  Name:Name,
  LastName:LastName,
  Email:Email,
  Password:Password,
  Division:Division,
  Position:Position,
  Department:Department
}).then(() => {
  SetUser([
    ...User,
    {
      Iduser:Iduser,
      Rank:Rank,
      Name:Name,
      LastName:LastName,
      Email:Email,
      Password:Password,
      Division:Division,
      Position:Position,
      Department:Department
    }

  ])
  //  alert("Insert Ok");
  setTimeout(() => {
    navigate(`/`);
  }, 3000)
   
})
  }

}






  return (
    <div>
        <Navbar />
      {alerts ? <ToastContainer draggable={false} transition={Zoom} autoClose={3000} /> : <></> }
        <Box sx={{height: '100vh',display: 'flex',justifyContent: 'center',alignItems:'center'}}>
            <Box sx={{ background: "#6592FD",width: "100%", maxWidth: 700,height: "100%",maxHeight: 700,top:'50%',left:'50%', borderRadius: "10px", borderStyle: "solid",}}>
                <Box sx={{textAlign: 'center',marginTop:'10px'}}>
                <Typography
              variant="subtitle1"
              sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "24px" }}
            >
              Sign up
            </Typography>
                </Box>
                <Box sx={{display: "flex",justifyContent:'center',alignItems: 'center',flexDirection:'column'}}>
                <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "100%",}}>
      <CssTextField inputProps={{ maxLength: 10 }} error={Iduser.length < 10 }  helperText={Iduser.length < 10 ? "กรุณาใส่เลขประจำตัว10หลัก" : ""} fullWidth  required  label="เลขประจำตัวข้าราชการ" id="fullWidth" onChange={(event) => {setIdUser(event.target.value)}} />

      </Box>
    </Box>
                <Box sx={{ minWidth: 600 }}>
                  <Box sx={{padding:'10px', width: "100%",}}>
                  <CssIFormControl fullWidth required error={Rank === ""}>
        <InputLabel id="demo-simple-select-label">ยศ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="ยศ"
          onChange={(event) => {setRank(event.target.value)}}
        >
     <MenuItem value="">
                    <em>None</em>
      </MenuItem>
      {
        Ranks.map((Rank)=> (
          <MenuItem value={Rank} key={Rank}>{Rank}</MenuItem>
        ))
      }
        </Select>
        {Rank === "" ? (<FormHelperText>กรุณาเลือกยศ</FormHelperText>) : ""}
        
      </CssIFormControl>
                  </Box>

    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField required fullWidth label="ชื่อ" error={Name.length === 0 }  helperText={Name.length === 0 ? "กรุณาใส่ชื่อ" : ""} id="fullWidth" onChange={(event) => {setName(event.target.value)}} />
      </Box>
      <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField required fullWidth label="นามสกุล" error={LastName.length === 0 }  helperText={LastName.length === 0 ? "กรุณาใส่นามสกุล" : ""} id="fullWidth" onChange={(event) => {setLastName(event.target.value)}}/>
      </Box>
    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "50%",}}>
    <CssTextField required fullWidth label="RTAF-Email" id="fullWidth" placeholder='(ไม่ใส่ @ rtaf.mi.th)' error={Email.length === 0 }  helperText={Email.length === 0 ? "กรุณาใส่Email" : ""} onChange={(event) => {setEmail(event.target.value)}}/>
      </Box>
      <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField required fullWidth label="Password" id="fullWidth" error={Password.length === 0 }  helperText={Password.length === 0 ? "กรุณาใส่Password" : ""}  onChange={(event) => {setPassword(event.target.value)}}/>
      </Box>
    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "100%",}}>
      <CssTextField fullWidth disabled value={'กองควบคุมมาตราฐาน'} InputLabelProps={{
            shrink: true,
          }} label="กอง" id="fullWidth" onChange={(event) => {setDivision(event.target.value)}} />
      </Box>
    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "50%",}}>
    <CssIFormControl fullWidth required error={Position === ""}> 
        <InputLabel id="demo-simple-select-label">แผนก</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="แผนก"
          onChange={(event) => {setPosition(event.target.value)}}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
            Departments.map((Department) => (
              <MenuItem value={Department} key={Department}>{Department}</MenuItem>
            ))
          }
        </Select>
        {Position === "" ? (<FormHelperText>กรุณาแผนก</FormHelperText>) : ""}
      </CssIFormControl>
      </Box>
      <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField disabled value={'ศซว.ทอ.'} fullWidth InputLabelProps={{
            shrink: true,
          }} label="สังกัด" id="fullWidth" onChange={(event) => {setDepartment(event.target.value)}} />
      </Box>
    </Box>
    <Box sx={{display: "flex"}}>
                    <Box sx={{margin:'10px'}}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                    <ColorButton startIcon={<PersonAddIcon />} variant="contained" onClick={()=>submit()}>Sign UP</ColorButton>
                    </Link>
                    </Box>
                    <Box sx={{margin:'10px'}}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <ColorButton startIcon={<ArrowBackIcon />} variant="contained">BACK</ColorButton>
                    </Link>
                    </Box>
                </Box>
</Box>
            </Box>
        </Box>
    </div>
  )
}

export default PageSignUp