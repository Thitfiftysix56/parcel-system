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
import IncreaseAndDecrease from '../components/IncreaseAndDecrease'
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'id', headerName: 'ลำดับ', width: 90 },
  {
    field: 'parcelnumber',
    headerName: 'เลขพัสดุ',
    width: 150,
    editable: true,
  },
  {
    field: 'parcelname',
    headerName: 'ชื่อพัสดุ',
    width: 150,
    editable: true,
  },
  {
    field: 'withdraw',
    headerName: 'จำนวนที่ต้องการเบิก',
    width: 150,
    renderCell: (params) => {
      return (
        <>
      <strong>
        <IncreaseAndDecrease />
      </strong>
        </>
      )
      
  },
  },
    {
      field: 'status',
      headerName: 'สถานะ',
      width: 150,
      renderCell: (params) => (
        <strong>
        <p style={{color: '#000000'}}>รออนุมัติ</p>
        </strong>
      ),
    },
    {
      field: 'management',
      headerName: 'การจัดการ',
      width: 250,
      renderCell: (params) => (
        <strong>
          <Box sx={{display: 'flex'}}>

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
  { id: 1, parcelnumber: '001', parcelname: 'ปากกา'},
  { id: 2, parcelnumber: '002', parcelname: 'ปากกา'},
  { id: 3, parcelnumber: '003', parcelname: 'ปากกา'},
  { id: 4, parcelnumber: '004', parcelname: 'ปากกา'},
  { id: 5, parcelnumber: '005', parcelname: 'ปากกา'},
  { id: 6, parcelnumber: '006', parcelname: 'ปากกา'},
  { id: 7, parcelnumber: '007', parcelname: 'ปากกา'},
  { id: 8, parcelnumber: '008', parcelname: 'ปากกา'},
  { id: 9, parcelnumber: '009', parcelname: 'ปากกา'},
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

function PageViewItem() {
  return (
    <div>
           <Box sx={{width: "100%",height: "100%"}}>
        <DrawerHeader />

            <Box sx={{textAlign: "center"}}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "28px" }}
            >
              รายการที่เบิก
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

export default PageViewItem