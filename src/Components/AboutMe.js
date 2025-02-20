import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import me from '../images/AboutBrian.png';
import spacebg from '../images/spacebg.jpg';

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
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
                ref={ref} // Set the ref for intersection observer
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
      marginRight: '-20rem',
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
  },
  Nav:{
      zIndex: 98
  },
  experience:{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '60px',
      marginLeft: '400px',
  },
  html:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: '200px'
  },
  htmlBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '30px',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  css:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '200px'
  },
  cssBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  js:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '200px'
  },
  jsBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  nodeBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  node:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '200px'
  },
  reactBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  react:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '200px'
  },
  mongoBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  mongo:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '200px'
  },
  figmaBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white'
  },
  figma:{
      height: '120px',
      width: '120px',
      display: 'flex',
      flexDirection: 'row',
      marginRight: '200px'
  },
  github:{
      height: '105px',
      width: '105px',
      marginRight: '10px',
      backgroundColor: 'white',
      borderRadius: '20%'
  },
  linkedIn:{
      height: '105px',
      width: '105px',
      marginLeft: '10px'
  },
  contactForm:{

  },
  contactBtn:{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '43%',
      marginRight: 'auto',
      marginTop: '40px',
      justifyContent: 'spaceBetween',
  },
  

}