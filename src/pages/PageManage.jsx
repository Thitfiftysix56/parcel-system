import React,{useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLinkOperator,
} from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import SelectStatus from '../components/SelectStatus'
import EditManage from '../components/EditManage'


const columns = [
  { field: 'id', headerName: 'ลำดับ', width: 90 },
  {
    field: 'name',
    headerName: 'ยศ-ชื่อ-นามสกุล',
    width: 150,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'กอง',
    width: 150,
    editable: true,
  },
  {
    field: 'position',
    headerName: 'สังกัด',
    width: 150,
    editable: true,
  },
    {
      field: 'status',
      headerName: 'สถานะ',
      width: 150,
      renderCell: (params) => (
        <>
        <SelectStatus />
        </>
      ),
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 150,
      editable: true,
    },
    {
      field: 'management',
      headerName: 'การจัดการ',
      width: 250,
      renderCell: (params) => (
        <strong>
          <Box sx={{display: 'flex'}}>
<EditManage />

<Link to="#" style={{ textDecoration: "none" }}>
<ButtonDelete
  variant="outlined"
  color="primary"
  size="small"
  style={{ marginLeft: 16 }}
  startIcon={<DeleteIcon />}
>
  DELETE
</ButtonDelete>
</Link>
          </Box>
 
        </strong>
      ),
    },
];

const rows = [
  { id: 1, name: 'จ.อ.อาทิตย์ แสนโคก', company: 'กมซ.',position:'ศซว.ทอ.',email:'arthit_sankok'},
  
];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  );
}




const ButtonDelete = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#ffffff'),
  backgroundColor: "#ffffff",
  borderColor:'#f44336',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: "#f44336",
    borderColor:'#f44336',
    color:"#ffffff"
  },
}));


function PageManage() {
  return (
    <div>
    <Box sx={{width: "100%",height: "100%"}}>
 <DrawerHeader />

     <Box sx={{textAlign: "center"}}>
     <Typography
       variant="subtitle1"
       sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "28px" }}
     >
       จัดการสมาชิก
     </Typography>
     </Box>
     <DrawerHeader />
     <Container >


     <Box sx={{ height: 400, width: 1 ,backgroundColor:'#ffffff'}}>
<DataGrid
  rows={rows}
 columns={columns}
 initialState={{
   filter: {
     filterModel: {
       items: [],
       quickFilterLogicOperator: GridLinkOperator.Or,
     },
   },
 }}
 components={{ Toolbar: QuickSearchToolbar }}
/>
</Box>
</Container>
 </Box>
</div>
  )
}

export default PageManage