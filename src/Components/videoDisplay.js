import React,{ useRef } from 'react';
import asteroid from '../videos/asteroids.mp4';
import cryptoWatch from '../videos/cryptoWatch.mp4';
import { motion } from 'framer-motion';

const VideoDisplay = () => {

  return (
    <div className='container'>
        <motion.div className='asteroid'
            initial={{opacity: 0, y: 150}}
            whileInView={{opacity: 1, y: 0, threshold: 0.99}}
            transition={{duration: 1, ease: 'easeOut'}}>
            <h1 style={styles.title}>Asteroid Game</h1>
            <video src={asteroid} controls width="250" alt='asteroid' style={styles.asteroid}/>
        </motion.div>
        <motion.div className='cryptoWatch'
            initial={{opacity: 0, y: 150}}
            whileInView={{opacity: 1, y: 0, threshold: 0.99}}
            transition={{duration: 1, ease: 'easeOut'}}>
            <h1 style={styles.title}>CryptoWatch</h1>
            <video src={cryptoWatch} controls width="250" alt='cryptoWatch' style={styles.cryptoWatch}/>
        </motion.div>
    </div>
  );
};
export default VideoDisplay

const styles = {
        container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
    },
    asteroid:{
        marginTop: '9%',
        height: 'auto',
        width: '80%',
        marginLeft: '10%'
    },
    cryptoWatch:{
        marginTop: '8%',
        marginBottom: '8%',
        height: 'auto',
        width: '80%',
        marginLeft: '10%'
    },
    title:{
        color: 'white',
        fontFamily: 'Anta, sans-serif',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '4rem',
        marginTop: '0%',
        marginBottom: '-8%',
        marginLeft: '38%'
    }
};