
import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material'
const Footer = () => {
  return (
    <AppBar sx={{display:'flex',alignItems:'center',jutifyContent:'center',position:'relative',bottom:0}}>
        <Toolbar color='#039FD0' disableGutters='true' >
          <Typography variant='subtitle1' >  &copy; Copyright all right reserved to developer Hasnain MaliCk</Typography>
            {/* <Typography variant='subtitle1' textAlign='center'>Developed by Hasnain MaliCk</Typography> */}
            
            </Toolbar>
    </AppBar>
  )
}

export default Footer