import React,{ useState} from 'react'
import CarouselContext from './CarouselContext';
const CarouselState = (props) => {
  const [skills,setSkills] = useState([]);
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        autoplay: true,
       
    };

  return (
    <CarouselContext.Provider value={{settings,skills,setSkills}}>
        {props.children}
    </CarouselContext.Provider>
  )
}

export default CarouselState