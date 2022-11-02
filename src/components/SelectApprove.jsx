import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectApprove() {
    const [Approve, setApprove] = React.useState(10);

    const handleChange = (event) => {
        setApprove(event.target.value);
    };
  return (
    <div>
 <Box sx={{ minWidth: 120,margin:'10px' }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Approve}
          onChange={handleChange}
         
        >
          <MenuItem value={10}>รอการอนุมัติ</MenuItem>
          <MenuItem value={20}>อนุมัติแล้ว</MenuItem>
          <MenuItem value={30}>ไม่ได้รับการอนุมัติ</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default SelectApprove