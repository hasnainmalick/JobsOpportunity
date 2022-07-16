import React,{useState} from 'react'
import {useForm } from "react-hook-form"
import {TextField,ButtonGroup, Button ,Typography,Stack} from "@mui/material"
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [contact,setContact] = useState();
    const [query,setQuery] = useState();
    

    const submitData=(data)=>{
      alert(JSON.stringify(data))
    }
  return (
    <Stack justifyContent='center' alignItems='center' sx={{minWidth:{lg:'50vw'}}}margin='1rem' padding='1rem'>
          <form autoComplete='off' onSubmit={handleSubmit(submitData)}>
            <Typography textAlign='center' variant='h3'>Sign-up</Typography>
            <TextField name='name' type = 'name' sx={{width:350,marginTop:'0.7rem'}} 
            value={name} onChange={(e)=>setName(e.target.value)} 
            {...register("Name",{required:"Please input full name", minLength:{
              value:5,
              message:'Name length should be more than 5'},
              pattern:{
                value:/^[a-zA-Z\s]*$/,
                message:'Name should be only alphabet'
            }})}label='Enter Full Name'/> 
            {<p style={{color:'red',textALign:'left'}}>{errors.Name?.message}</p>}
            <TextField name='email' type='email' fullWidth value={email} onChange={(e) => setEmail(e.target.value)} 
             {...register("Email",{required:"Please input email",pattern:{
              value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message:'Email should be valid'}})}label='Enter Email'/> 
              {<p style={{color:'red',textALign:'left'}}>{errors.Email?.message}</p>}
            
            {/* Contact input */}
            <TextField name='contact' type='tel' fullWidth value={contact} onChange={(e) => setContact(e.target.value)}
            {...register("Contact",{required:"Please input contact",pattern:{
             value:/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
             message:'Contact should be 11 digit'}})}label='Enter Contact'/> 
             {<p style={{color:'red',textALign:'left'}}>{errors.Contact?.message}</p>}
            <TextField name='query' type='text'fullWidth value={query} onChange={(e) => setQuery(e.target.value)} multiline minRows={4} 
            {...register("Query",{required:"Please input query"})}label='Enter Query'/>
             {<p style={{color:'red',textALign:'left'}}>{errors.Query?.message}</p>}
            <ButtonGroup sx={{marginTop: '0.7',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Button type='back'  size='large' onClick={()=>navigate('/login')} variant='outlined' color='primary'>Back</Button>
            <Button type='submit' size='large' variant='contained' color='primary'>Submit</Button>
            </ButtonGroup>
          </form>
        </Stack>
  )
}
export default Signup