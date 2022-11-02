import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from '../img/logo/logo.gif'

function Navbar() {
  return (
    <div>
<Box sx={{width: '100%', height: '100px',background:'#2B2785',display:'flex'}}>
           <Box sx={{display: 'flex',justifyContent:'flex-start',alignItems: 'center',width: '5%',height: '100%'}}>
                <img style={{width:'90px',height:'80px',margin:'10px'}} src={logo} alt="img" />
           </Box>
           <Box sx={{display:'flex' , justifyContent:'center',alignItems: 'center',width: '90%',height: '100%'}}>
                <Typography variant="subtitle1" sx={{color: '#ffffff',fontWeight: 'bold',fontSize: '28px'}}>
                        ระบบเบิกจ่ายพัสดุ
                </Typography>
           </Box>
           
</Box>
    </div>
  )
}

export default Navbar