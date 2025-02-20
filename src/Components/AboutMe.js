import React from 'react'
import { motion } from 'framer-motion'
import me from '../images/AboutBrian.png';
import spacebg from '../images/spacebg.jpg';
import './About.css';
const AboutMe = () => {
  return (
    <>
    <div className='body-space' style = {styles.bodySpace}>
        <div class='bg' style={{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spacebg})`}}>
        <div style={styles.about}>
            <div style={styles.intro}>
                <motion.div
                    animate={{ x:50 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    whileInView={ true }
                    viewport={{ once: true }}>
                    <h1 style={styles.name} class='name'>Brian Barker</h1>
                    <p style={styles.para}>Welcome! I am a hardworking veteran looking to enter the tech field.
                    I recently graduated from school for web development and design.
                    I have a passion for creating in the digital space and would love to find a company where I can contribute and grow my skills.</p>
                </motion.div>
            </div>
            <motion.div

                initial={{ scale: .025 }} // Start off-screen to right side
                animate={{ scale: 1 }} // Move to the normal position when in view
                //spring animation at the end of movement 
                transition={{ type: 'spring', stiffness: 60, damping: 50 }}
                viewport={{ once: true }}>
                <img src={me} alt='me' style={styles.img}/>
            </motion.div>
        </div>
        </div>
    </div>
    </>
  )
}

export default AboutMe

const styles = {
    about:{
      display: 'flex',
      flexDirection: 'row',
  },
  img:{
      height: '950px',
      width: 'auto',
      marginTop: '6rem',
      marginRight: '-10rem',
  },
  name:{
      color: 'white',
      fontFamily: 'Anta, sans-serif',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '4rem',
      marginLeft: '20rem',
      marginTop: '6rem'
  },
  para:{
      fontFamily: 'Anta, sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '1.5rem',
      color:'white',
      marginTop: '-2rem',
      marginLeft: '20rem',
      marginRight: '10rem'
  }
}