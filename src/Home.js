import React from 'react';
import video from './media/salmon.mp4';
import './App.css';
import Description from './Description.js';
import Chart from './Chart';
import Icons from './Icon';


const Home = () => {
  return(
    <div className="video_wrapper">
      <video id="video" width="100%" height="100%" loop autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support this video format.
      </video>
      <div className="overlay">
        <h2 className="heading">In the Sound</h2>
        <p>"The health of salmon populations reflects the overall health of Puget Sound."</p>
      </div>
      <Description />
      <Chart />
      <Icons /> 
    </div>
  )
}


export default Home;