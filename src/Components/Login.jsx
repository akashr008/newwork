import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1 style={{color:'blue',backgroundColor:'lightblue',textAlign:'center'}}>Login Page</h1>
        <TextField id="filled-basic" label="UserName" variant="filled" /><br />
        <TextField id="filled-basic" label="password" variant="filled" /><br />
        <Button variant="contained">LOGIN</Button>
    </div>
  )
}

export default Login