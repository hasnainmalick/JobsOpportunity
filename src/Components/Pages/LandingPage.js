import {Box, Stack, Container, Typography, ButtonGroup ,  Button } from '@mui/material'
import React from 'react'
import FrontImage from './images/mainImage.PNG'
const LandingPage = () => {
  return (
    <Container maxWidth='lg' disableGutters='true'>
        
        <Stack direction='row' justifyContent='space-between' marginTop='2rem'>
            <Stack direction='column' alignItems='left' justifyContent='left'>
            <Typography variant='h5' textAlign='left' fontWeight='500' fontFamily='Inter'>
              Are you an <Typography  variant='h5' sx={{display:'inline-block'}} color='primary'>educator</Typography><br/>looking for a job?
            </Typography>
            <Typography margin='1.5rem 0' textAlign='left'>
              Go no further...
            </Typography>
            <Typography margin='0.5rem 0' variant='h3'textAlign='left' fontWeight='bold'> We've got the most 
            <br/>prestigious <Typography  variant='h3' sx={{display:'inline-block'}} fontWeight='bold' color='primary'>schools</Typography> <br/> looking for 
            <span style={{color:'primary'}}> YOU</span>!
            </Typography>
            <Typography margin='1rem 0' textAlign='left' marginTop='1rem' variant='body1'>upload your resume and leave the rest to us</Typography>
            <ButtonGroup marginTop='1rem'>
              <Button variant='contained' sx={{marginRight:'2rem'}}color='primary'>Upload Resume</Button>
              <Button variant='outlined' color='primary'>Learn More</Button>
            </ButtonGroup>
            
          </Stack>
          <Box>
          <img className='Frontimage' src={FrontImage} alt='frontImage'/>
          </Box>
        </Stack>
    </Container>
  )
}

export default LandingPage