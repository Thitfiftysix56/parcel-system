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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



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

  const CssIFormControl = styled(FormControl)({
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });


function EditManage(props) {

  const {dataUser} = props;
  

  const [rank, setRank] = React.useState('');
  const [DataUser, setDataUser] = React.useState(dataUser);
  console.log(DataUser)

  const handleChange = (event) => {
    setRank(event.target.value);
  };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
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
          <p style={{fontSize: '24px',fontWeight: 'bold'}}>?????????????????????????????????</p>
        </DialogTitle>
        <DialogContent>
        
        <Box sx={{display: "flex",justifyContent:'center',alignItems: 'center',flexDirection:'column'}}>
     
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField fullWidth label="????????????" id="fullWidth" value={DataUser.row.Name} />
      </Box>
      <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField fullWidth label="?????????????????????" id="fullWidth" value={DataUser.row.LastName} />
      </Box>
    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "100%",}}>
      <CssTextField fullWidth label="RTAF-Email" id="fullWidth" placeholder='(????????? @ rtaf.mi.th)' value={DataUser.row.Email} />
      </Box>
    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "100%",}}>
      <CssTextField fullWidth label="?????????" id="fullWidth" value={DataUser.row.Division} />
      </Box>
    </Box>
    <Box sx={{ minWidth: 600 ,display: "flex"}}>
    <Box sx={{padding:'10px', width: "50%",}}>
    <CssIFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">????????????</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={DataUser.row.Position}
          label="????????????"
          onChange={handleChange}
        >
          <MenuItem value={"????????????????????????????????????????????????????????????"}>????????????????????????????????????????????????????????????</MenuItem>
          <MenuItem value={"?????????????????????????????????????????????????????????????????????????????????????????????"}>?????????????????????????????????????????????????????????????????????????????????????????????</MenuItem>
        </Select>
      </CssIFormControl>
      </Box>
      <Box sx={{padding:'10px', width: "50%",}}>
      <CssTextField fullWidth label="??????????????????" id="fullWidth"  value={DataUser.row.Department}/>
      </Box>
    </Box>
</Box>
       
        </DialogContent>
        <DialogActions sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}> 
        <ButtonAdd
                variant="outlined"
                color="primary"
                size="small"
                
              >
                ??????????????????
              </ButtonAdd>
        </DialogActions>
      </Dialog>
  </div>
  )
}

export default EditManage