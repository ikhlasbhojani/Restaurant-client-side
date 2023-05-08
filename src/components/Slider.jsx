import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import food4 from "../assits/food4.jpg"
import food2 from "../assits/food2.jpg"
import food3 from "../assits/food3.jpg"



const Slider = () => {
  return (
    <Carousel autoPlay={true} width={"80%"}infiniteLoop={true} showThumbs={false} centerMode={true} className='carousel'>
                <div>
                    <img src={food4} alt='food' width={"100%"} height={"500px"} />
                    <p className="legend">BUN KABAB</p>
                </div>
                <div>
                    <img src={food2} alt='food' width={"100%"} height={"500px"} />
                    <p className="legend">TOMATO CREAMY PIZZA</p>
                </div>
                <div>
                    <img src={food3} alt='food' width={"100%"} height={"500px"} />
                    <p className="legend">SPACIAL FAJITA</p>
                </div>
            </Carousel>
  )
}

export default Slider