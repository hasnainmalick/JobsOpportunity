import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage';
import Home from './Home';
import SearchResult from './SearchResult';
import Login from './Login';
import Signup from '../PagesComponent/Signup';
const IndexRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/SearchResult' element={<SearchResult/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default IndexRoute