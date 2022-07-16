import React,{useContext} from 'react'
import Filter from '@mui/icons-material/FilterList';
import {Stack, Button, Typography,  FormControlLabel,
     Checkbox} from '@mui/material'
import db from '../db/db.json'
import CarouselContext from '../Context/CarouselContext'


const FilterSearch = () => {
    // const [checked, setChecked] = useState(false);
    const data = useContext(CarouselContext);
    const {skills,setSkills} = data;
    // const [skills,setSkills] = useState([]);
    console.log({skills})
    const handleSkills=(e)=>{

        const index  = skills.indexOf(e.target.value);
        const updatedItem = db.filter((curr)=>{
            return curr.skills === index;
        })
        console.log(updatedItem)
        setSkills(updatedItem)
    }
  return (
        <Stack justifyContent='center' sx={{border:'2px solid #039FD0',maxHeight:'650px', margin:'33px 20px 0 0',borderRadius:'5px',padding:'15px 20px'}}>
            <Button sx={{fontWeight:'bold', }} variant="text" color='secondary' startIcon={<Filter/>}>All Filter</Button>
            
            <Typography color='primary' sx={{fontWeight:'bold'}} variant='subtitle1'>Work from home</Typography>
            <FormControlLabel label="Work from home" color='primary' control={<Checkbox checked={skills.includes('work from home')} value='work from home' onChange={handleSkills} />}  />
            <Typography color='primary' sx={{fontWeight:'bold', marginTop:"15px"}} variant='subtitle1'>Salary Range</Typography>
            <FormControlLabel label="1LPA - 3LPA" control={<Checkbox checked={skills.includes('1LPA - 3LPA')} value='1LPA - 3LPA' onChange={handleSkills}  /> } />
            <FormControlLabel label="3.5LPA - 5LPA" control={<Checkbox checked={skills.includes('3.5LPA - 5LPA')} value='3.5LPA - 5LPA' onChange={handleSkills}  />}/>
            <FormControlLabel label="5.5LPA - 7LPA" control={<Checkbox checked={skills.includes('5.5LPA - 7LPA')} value='5.5LPA - 7LPA' onChange={handleSkills}  />}/>
            <FormControlLabel label="7LPA and more" control={<Checkbox checked={skills.includes('7LPA and more')} value='7LPA and more' onChange={handleSkills}  />}/>
            <Typography color='primary' sx={{fontWeight:'bold', marginTop:"15px"}} variant='subtitle1'>School Type</Typography>
            <FormControlLabel label="Government" control={<Checkbox   checked={skills.includes('Government')} value='Government' onChange={handleSkills}  />}/>
            <FormControlLabel label="Special Education"  control={<Checkbox  checked={skills.includes('Special Education')} value='Special Education' onChange={handleSkills}  />} />
            <FormControlLabel label="Private" control={<Checkbox   checked={skills.includes('Private')} value='Private' onChange={handleSkills}  />} />
            <FormControlLabel label="Home School" control={<Checkbox   checked={skills.includes('Home School')} value='Home School' onChange={handleSkills}  />}/>
            <FormControlLabel label="Boarding" control={<Checkbox   checked={skills.includes('Boarding')} value='Boarding' onChange={handleSkills}  />}/>
            <FormControlLabel label="University" control={<Checkbox   checked={skills.includes('University')} value='University' onChange={handleSkills}  />}/>
        </Stack>

  )
}

export default FilterSearch