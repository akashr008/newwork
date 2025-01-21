import { Box, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
      <h3 style={{color:'blue',backgroundColor:'lightblue',textAlign:'center'}}>Registartion Form</h3>
    <div className='g1'>
      <TextField
        required
        id="outlined-required"
        label="Student ID"
       
      />
         <TextField
        id="outlined-password-input"
        label="Name"
        autoComplete="current-password"
      />
        
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <TextField
        id="outlined-read-only-input"
        label="Address"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
           <TextField
        id="outlined-read-only-input"
        label="Qualifications"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <TextField id="outlined-search" label="Search field" type="search" />
    </div>
  </Box>
  )
}

export default Register