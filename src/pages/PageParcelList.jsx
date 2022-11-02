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
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import IncreaseAndDecrease from '../components/IncreaseAndDecrease'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonEdit from '../components/EditParcel'











const ButtonAdd = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#ffffff'),
  backgroundColor: "#ffffff",
  borderColor:'#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: "#8C61FF",
    borderColor:'#8C61FF',
    color:'#ffffff'
  },
}));


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
      field: 'quantity',
      headerName: 'จำนวน',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: 'unit',
        headerName: 'หน่วย',
        width: 50,
        editable: true,
      },
      {
        field: 'status',
        headerName: 'สถานะ',
        width: 150,
        renderCell: (params) => (
          <strong>
          <p style={{color: '#4caf50'}}>ว่าง</p>
          </strong>
        ),
      },
      {
        field: 'withdraw',
        headerName: 'เบิก',
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
        field: 'management',
        headerName: 'การจัดการ',
        width: 250,
        renderCell: (params) => (
          <strong>
            <Box sx={{display: 'flex'}}>
            <ButtonEdit />

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
    { id: 1, parcelnumber: '001', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 2, parcelnumber: '002', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 3, parcelnumber: '003', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 4, parcelnumber: '004', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 5, parcelnumber: '005', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 6, parcelnumber: '006', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 7, parcelnumber: '007', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 8, parcelnumber: '008', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
    { id: 9, parcelnumber: '009', parcelname: 'ปากกา', quantity: 12 ,unit:"EA",status:"ว่าง"},
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


  const ButtonDecrease = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ffffff'),
    backgroundColor: "#8C61FF",
    borderColor:'#8C61FF',
    fontWeight: 'bold',
  }));
  const ButtonIncrease = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ffffff'),
    backgroundColor: "#2196f3",
    borderColor:'#2196f3',
    fontWeight: 'bold',
  }));

function PageParcelList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
  
  return (
    <div>
        <Box sx={{width: "100%",height: "100%"}}>
        <DrawerHeader />

            <Box sx={{textAlign: "center"}}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#ffffff", fontWeight: "bold", fontSize: "28px" }}
            >
              รายการพัสดุ
            </Typography>
            </Box>
            <Container >
            <ButtonAdd
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
              >
                เพิ่มรายการพัสดุ
              </ButtonAdd>
              <Dialog
              fullWidth='true'
              maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign: "center"}}>
          <p style={{fontSize: '24px',fontWeight: 'bold'}}>เพิ่มรายการพัสดุ</p>
        </DialogTitle>
        <DialogContent>
        <Box sx={{display: "flex",justifyContent: 'center',alignItems: 'center',flexDirection:'column'}}>
          <Box sx={{margin:'10px',width: "100%"}}>
            <TextField id="outlined-basic" label="เลขพัสดุ" variant="outlined" fullWidth/>
          </Box>
          <Box sx={{margin:'10px',width: "100%"}}>
            <TextField id="outlined-basic" label="ชื่อพัสดุ" variant="outlined" fullWidth/>
          </Box>
          <Box sx={{margin:'10px',width: "100%",display:'flex'}}>
            <Box sx={{width: "80%"}}>
            <TextField id="outlined-basic" label="จำนวน"  InputLabelProps={{
            shrink: true,
          }} value={counter} variant="outlined" fullWidth/>
            </Box>
            <Box sx={{display: "flex",width: "20%"}}>
            <Box sx={{margin:'10px'}}>
              <ButtonIncrease onClick={incrementCounter} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}  variant="contained" ><AddIcon /> </ButtonIncrease>   
              </Box>
              <Box sx={{margin:'10px'}}>
              <ButtonDecrease onClick={decrementCounter} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}  variant="contained" ><RemoveIcon /> </ButtonDecrease>   
              </Box>
            </Box>
          </Box>
          <Box sx={{margin:'10px',width: "100%"}}>
            <TextField id="outlined-basic" label="หน่วย" variant="outlined" fullWidth/>
          </Box>
        </Box>
        </DialogContent>
        <DialogActions>
        <ButtonAdd
                variant="outlined"
                color="primary"
                size="small"
                
              >
                บันทึก
              </ButtonAdd>
              <ButtonAdd
                variant="outlined"
                color="primary"
                size="small"
                onClick={handleClose}
              >
                ยกเลิก
              </ButtonAdd>
        </DialogActions>
      </Dialog>

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
    <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
    <ButtonAdd
                variant="outlined"
                color="primary"
                size="small"
                sx={{margin:'20px'}}
              >
                ยืนยันการเบิก
              </ButtonAdd>
              <ButtonAdd
                variant="outlined"
                color="primary"
                size="small"
                sx={{margin:'20px'}}
              >
                ยกเลิก
              </ButtonAdd>
    </Box>
    </Container>
        </Box>
    </div>
  )
}

export default PageParcelList