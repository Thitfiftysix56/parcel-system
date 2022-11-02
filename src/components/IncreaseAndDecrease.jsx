import React,{useState} from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


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



function IncreaseAndDecrease() {

    const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
    
  return (
    <div>
        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
              <Box sx={{margin:'5px'}}>
              <p>{counter}</p>
              </Box>
              <Box sx={{margin:'5px'}}>
              <ButtonIncrease onClick={incrementCounter} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}  variant="contained" ><AddIcon /> </ButtonIncrease>   
              </Box>
              <Box sx={{margin:'5x'}}>
              <ButtonDecrease onClick={decrementCounter} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}  variant="contained" ><RemoveIcon /> </ButtonDecrease>   
              </Box>
            </Box>
    </div>
  )
}

export default IncreaseAndDecrease