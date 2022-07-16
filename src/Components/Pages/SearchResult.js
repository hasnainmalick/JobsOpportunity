import React, { useState, useContext } from 'react'
import { Paper, Typography, Button, Stack, Box, TextField, Container } from '@mui/material'
import Location from '@mui/icons-material/LocationOnOutlined';
import AccessTime from '@mui/icons-material/AccessTimeOutlined';
import Paid from '@mui/icons-material/PaidOutlined';
import SchoolEducation from '@mui/icons-material/SchoolOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FilterResult from '../Utils/FilterSearch'
import CarouselContext from '../Context/CarouselContext'
import db from '../db/db.json'
// import {TextField} from '@mui/material'
const SearchResult = () => {
  const data = useContext(CarouselContext)
  const {skills,setSkills} = data;
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Container maxWidth='lg'>
      <Stack direction='row' margin='4rem 0' justifyContent='space-between'>
        <TextField onChange={handleChange} sx={{ width: '350px' }} label='Search by keyword / skill / school name' />
        <TextField onChange={handleChange} sx={{ width: '280px' }} label='Enter location' />
        <TextField onChange={handleChange} label='Enter Experience' />
        <Button placeholder='Enter experience' variant='contained' sx={{ padding: '0 30px' }} startIcon={<SearchIcon />}>Search</Button>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <FilterResult />
        <Box>
          { 
            db
              .filter((val) => {
                if (query === "") {
                  return val;
                } else if (val.title.toLowerCase().includes(query) ||
                val.location.toLowerCase().includes(query) ||
                val.experience.toLowerCase().includes(query) ||
                val.category.toLowerCase().includes(...skills) 
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <Box key={val.id} margin='2rem 0'>
                    <Paper sx={{ padding: '2rem' }} elevation={3}>
                      <Stack direction='row' justifyContent='space-between'>
                        <Stack direction='column' sx={{minWidth:500}}justifyContent='flex-start'>
                          <Typography color='secondary' variant='h6'>Job Title : {val.title}</Typography>
                          <Typography color='secondary' variant='subtitle1'>Description : {val.description}</Typography>
                          <Stack direction='row' justifyContent='space-between'>
                            <Button variant="text" color='secondary' startIcon={<Location />}>{val.location} </Button>
                            <Button variant="text" color='secondary' startIcon={<AccessTime />}>{val.experience} </Button>
                            <Button variant="text" color='secondary' startIcon={<SchoolEducation />}>{val.education} </Button>
                            <Button variant="text" color='secondary' startIcon={<Paid />}>{val.salary} </Button>
                          </Stack>
                          <Button sx={{ width: '40px', marginLeft: '10px' }} variant='text' startIcon={<ShareIcon />}>Share</Button>
                        </Stack>
                        <img className='image' src={val.image} alt="company logo" />
                      </Stack>
                    </Paper>
                  </Box>
                )
              }
              )}
        </Box>
      </Stack>
    </Container>
  )
}

export default SearchResult