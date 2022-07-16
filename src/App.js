import './App.css';
// import LandingPage from './Components/Pages/LandingPage';
import IndexRoute from './Components/Pages/IndexRoute';
import { ThemeProvider, Container } from '@mui/material'
import {theme} from './Components/Style/Styletheme'
import Navbar from './Components/PagesComponent/Navbar';
import Footer from './Components/PagesComponent/Footer';
// import Example from './Example.js'
import CarouselState from './Components/Context/CarouselState';

function App() {
  return (
    <>
    <Container maxWidth='lg'>
      <ThemeProvider theme={theme}>
        <CarouselState>
        <Navbar/>
        <IndexRoute />
        </CarouselState>
      </ThemeProvider>
    </Container>
        <Footer/>
        {/* <Example/> */}
    </>
        
  );
}

export default App;
