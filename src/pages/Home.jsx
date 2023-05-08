import React from 'react';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <div className='hero-content'>
      <div className="waviy">
      <span style={{'--i': 1}}>Z</span>
      <span style={{'--i': 2}}>I</span>
      <span style={{'--i': 3}}>N</span>
      <span style={{'--i': 4}}>G</span>
      <span style={{'--i': 5}}>A</span>
      <span style={{'--i': 6}}>L</span>
      <span style={{'--i': 7}}>A</span>
      <span style={{'--i': 8}}>L</span>
      <span style={{'--i': 9}}>A </span>
      <span className='spacial'>SPACIAL</span>
    </div>
      <Slider/>
    </div>
  )
}

export default Home;