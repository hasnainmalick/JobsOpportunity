import React from 'react'
import {Typography,Stack,Button} from '@mui/material'
import {LinkRouter} from '../Style/ReusableComponents'
import {Link as RouterLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' marginTop='1rem' sx={{position:'sticky', top:3}}>
             <Typography backgroundColor='primary' fontWeight='bold' variant='h5' 
             textAlign='left' sx={{fontFamily:'Sacramento'}}> School <Typography fontWeight='bold' variant='h5' sx={{display:'inline-block', fontFamily:'Sacramento'}} color='primary'>Teacher</Typography>.com </Typography>
        <Stack direction="row">
            <LinkRouter component={RouterLink} to="/">Home</LinkRouter>
            <LinkRouter component={RouterLink} to="/Home">Saved Job</LinkRouter>
            <LinkRouter component={RouterLink} to="/SearchResult">Are you a Recruiter?</LinkRouter>
            <Stack direction='row' gap='2rem' justifyContent='space-around'>
            <Typography fontWeight='600' marginTop='0.35rem'>|</Typography>
            <Button component={RouterLink} to='/login' variant='contained' color='primary'>Login</Button>
            </Stack>

        </Stack>
    </Stack>
  )
}

export default Navbar