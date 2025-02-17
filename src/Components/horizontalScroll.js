import React,{ useRef } from 'react';
import asteroid from '../videos/asteroids.mp4';
import cryptoWatch from '../videos/cryptoWatch.mp4';
import { motion, useScroll, useTransform } from 'framer-motion';
import './videoDisplay.css';

const videoDisplay = () => {
  return (<div className='carousel'>
    <div className='carousel__container'>
    <div className='carousel__item'>

        <h1 className='carousel__title'>Asteroid Game</h1>
        
        <video src={asteroid} controls width="250" alt='asteroid' className='carousel__video'/>

        <h1 className='carousel__title'>CryptoWatch</h1>

        <video src={cryptoWatch} controls width="250" alt='cryptoWatch' className='carousel__video'/>


    </div>
    </div>
        

    </div>
  )
}

export default videoDisplay;
