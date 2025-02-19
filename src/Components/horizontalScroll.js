import { React, useRef } from 'react';
import asteroid from '../videos/asteroids.mp4';
import cryptoWatch from '../videos/cryptoWatch.mp4';
import { motion, useScroll, useTransform } from 'framer-motion';
import './hScroll.css';

const VideoDisplay = () => {
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({target:targetRef});
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (<div className='carousel' ref={targetRef}>
    <div className='carousel__container'>
    <motion.div className='carousel__item' style={{x}}>

        
        <motion.div className='carousel__video'
        initial={{opacity: 0, y: 150}}
        whileInView={{opacity: 1, y: 0, threshold: 0.99}}
        transition={{duration: 1, ease: 'easeOut'}}>
            <h1 className='carousel__title'>Asteroid Game</h1>
            <video src={asteroid} controls width="250" alt='asteroid' className='carousel__video'/>
        </motion.div>

        
        <motion.div className='carousel__video'
        initial={{opacity: 0, y: 150}}
        whileInView={{opacity: 1, y: 0, threshold: 0.99}}
        transition={{duration: 1, ease: 'easeOut'}}>
            <h1 className='carousel__title'>CryptoWatch</h1>
            <video src={cryptoWatch} controls width="250" alt='cryptoWatch' className='carousel__video'/>
        </motion.div>


    </motion.div>
    </div>
        

    </div>
  )
}

export default VideoDisplay;


