import React,{useState} from 'react'
import {Stack,Box,Typography,ButtonGroup,Button,Divider,TextField} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import {Link as RouterLink} from 'react-router-dom'

const Login = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,password)
    }

  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh',width:'80vw'}}>
        <form onSubmit={handleSubmit}>
        <Stack direction='column' margin='20px' padding='20px' sx={{border:'2px solid #039FD0',borderRadius:'5px', minHeight:'30vh',minWidth:'30vw'}}>
        <Typography variant='h3' textAlign='center'>Login</Typography>
        <TextField sx={{marginTop:'10px'}}fullWidth label='username / email' required value={name} onChange={(e)=>setName(e.target.value)}/>
        <TextField sx={{marginTop:'10px'}} fullWidth label='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button sx={{margin:'10px 0 '}} variant='contained' color='primary'>Login</Button>
        <Divider/>
        <ButtonGroup fullWidth margin='2rem 0'>
              <Button variant='outlined' component={RouterLink} to='/signup' color='primary'>Sign up</Button>
              <Button variant='outlined' color='primary' startIcon={<GoogleIcon/>}>Login with Google</Button>
            </ButtonGroup>
        </Stack>
        </form>
    </Box>
  )
}

export default Login