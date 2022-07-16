import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TrendingJobs from '../Utils/TrendingJobs'
import LinkedinJobs from '../Utils/LinkedinJobs'
import {  Stack, TextField, Button, Divider} from '@mui/material';
const Home = () => {
    return (
    <>
      <Stack direction='row' gap={2} justifyContent='center' margin='4rem 0'>
        <TextField label='Search by keyword / skill / school name' />
        <TextField label='Enter location' />
        <TextField label='Enter Experience' />
        <Button placeholder='Enter experience' variant='contained' startIcon={<SearchIcon />}>Search</Button>
      </Stack>
      <Divider />
      {/* Import trending job component */}
      <TrendingJobs/>
      <LinkedinJobs/>
    </>)
}

export default Home