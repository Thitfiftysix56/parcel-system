import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLinkOperator,
} from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import SelectApprove from '../components/SelectApprove'



const columns = [
  { field: 'id', headerName: 'ลำดับ', width: 90 },
  {
    field: 'date',
    headerName: 'วันที่',
    width: 150,
    editable: true,
  },
  {
    field: 'parcelcode',
    headerName: 'รหัสพัสดุ',
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
      field: 'requester',
      headerName: 'ผู้ขอเบิก',
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
<SelectApprove />
          </Box>
 
        </strong>
      ),
    },
];

const rows = [
  { id: 1, date: '18/11/2564', parcelcode: '001',parcelname: 'ปากกา',requester:'จ.อ.อาทิตย์  แสนโคก'},
  { id: 2, date: '18/11/2564', parcelcode: '001',parcelname: 'ปากกา',requester:'จ.อ.อาทิตย์  แสนโคก'},
  { id: 3, date: '18/11/2564', parcelcode: '001',parcelname: 'ปากกา',requester:'จ.อ.อาทิตย์  แสนโคก'},
  { id: 4, date: '18/11/2564', parcelcode: '001',parcelname: 'ปากกา',requester:'จ.อ.อาทิตย์  แสนโคก'},
  { id: 5, date: '18/11/2564', parcelcode: '001',parcelname: 'ปากกา',requester:'จ.อ.อาทิตย์  แสนโคก'},
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








function PageApproveItem() {
  return (
    <div>
  <Box sx={{width: "100%",height: "100%"}}>
        <DrawerHeader />

            <Box sx={{textAlign: "center"}}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "28px" }}
            >
              อนุมัติการขอเบิก
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

export default PageApproveItem