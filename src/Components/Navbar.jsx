import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Link to={'/'}><Button color="inherit">home</Button></Link>
         <Link to={'/register'}> <Button color="inherit">Register</Button></Link>
         <Link to={'/login'}> <Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar