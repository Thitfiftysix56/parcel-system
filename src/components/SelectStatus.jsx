import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SelectStatus() {
    const [Status, setStatus] = React.useState(10);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

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
          <MenuItem value={10}>รอการอนุมัติ</MenuItem>
          <MenuItem value={20}>Admin</MenuItem>
          <MenuItem value={30}>สมาชิก</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default SelectStatus