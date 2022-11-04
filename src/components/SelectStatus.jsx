import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SelectStatus(props) {
  const {StatusS} = props;

    
    const [Status, setStatus] = React.useState(StatusS);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    console.log(Status)
  return (
    <div>
 <Box sx={{ minWidth: 120,margin:'10px' }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Status}
          onChange={handleChange}
         
        >
          <MenuItem value={"รออนุมัติ"}>รออนุมัติ</MenuItem>
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"สมาชิก"}>สมาชิก</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default SelectStatus