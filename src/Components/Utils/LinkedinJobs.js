import React,{useState,useEffect,useContext} from 'react';
import CarouselContext from '../Context/CarouselContext';
import Slider from "react-slick";
import { Typography, Box, Button, Paper } from '@mui/material'

const LinkedinJobs = () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '181d1cc106mshbf95b0d4ad79133p196081jsn08dd5f21a9d7',
            'X-RapidAPI-Host': 'tech-job-search-api.p.rapidapi.com'
        }
    };
    
    const ApiData = () => {
        fetch('https://tech-job-search-api.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => setState(response))
            .catch(err => console.error(err));
}
    useEffect(()=>{
        ApiData();
    },[]);
    const [state,setState] = useState([])
    const data = useContext(CarouselContext);
    const {settings} = data;
    
  return (
    <>
    <Box minHeight='200px' marginBottom='40px'>
        
      <Typography margin='2rem 0' textAlign='center' color='primary' variant='h4'>Software Jobs</Typography>
         {
            state.length === 0 ?
                (<Typography variant='h5' textAlign='center' color='primary'>Loading...</Typography>) :
                (<Slider {...settings}>
                    {state.map((item) => {
                        return (
                            <Box margin='10px'>
                            <Paper key = {item.id}sx={{minHeight:'100px',maxWidth:'200px', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',}} elevation={4}>
                                <Typography color='#000000' textAlign='center' variant='subtitle1'>{item.title}</Typography>
                               
                                <Button variant='text' target="_blank" href={item.url} color='primary'>Apply</Button>
                            </Paper>
                            </Box>
                        )
                    })}
                </Slider>)}
        </Box>
     </>
  )
}

export default LinkedinJobs