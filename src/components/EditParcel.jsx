import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ButtonEdit = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ffffff'),
    backgroundColor: "#ffffff",
    borderColor:'#ffee58',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: "#ffee58",
      borderColor:'#ffee58',
    },
  }));

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

function EditParcel() {
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
           <ButtonEdit
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<EditIcon />}
                onClick={handleClickOpen}
              >
                EDIT
              </ButtonEdit>

              <Dialog
              fullWidth='true'
              maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign: "center"}}>
          <p style={{fontSize: '24px',fontWeight: 'bold'}}>แก้ไขรายการพัสดุ</p>
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
    </div>
  )
}

export default EditParcel