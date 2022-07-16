import React, { useState, useEffect, useContext } from 'react'
import CarouselContext from '../Context/CarouselContext';
import Slider from "react-slick";
import { Typography, Box, Button, Paper } from '@mui/material'
const TrendingJobs = () => {
    // Api keys
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bc973232e0mshd841bd866342782p1147c0jsn3429ab3cf6c2',
            'X-RapidAPI-Host': 'job-vacancies.p.rapidapi.com'
        }
    };
    
    //   created function in function calling api using fetch method
    const ApiData = () => {
        fetch('https://job-vacancies.p.rapidapi.com/vacancies/jora', options)
            .then(response => response.json())
            .then(response => setState(response))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        ApiData();
    },)

    const [state, setState] = useState([])
    const data  = useContext(CarouselContext);
    const {settings} = data;
    console.log(state)
    return (      
        <Box minHeight='200px'>     
      <Typography margin='2rem 0' textAlign='center' color='primary' variant='h4'>Trending Jobs</Typography>
         {
            state.length === 0 ?
                (<Typography variant='h5' textAlign='center' color='primary'>Loading...</Typography>) :
                (<Slider {...settings}>
                    {state.map((item) => {
                        return (
                            <Box key={item.id} margin='10px' marginBottom='20px'>
                            <Paper sx={{minHeight:'100px',maxWidth:'200px', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',}} elevation={4}>
                                <Typography color='#000000' textAlign='center' variant='subtitle1'>{item.title}</Typography>
                                {/* <Typography color='#000000' textAlign='center' variant='subtitle1'>{item.company_name}</Typography> */}
                                <Button variant='text' target="_blank" href={item.url} color='primary'>Apply</Button>
                                
                            </Paper>
                            </Box>
                        )
                    })}
                </Slider>)}
        </Box>
        
    )
}

export default TrendingJobs