import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import me from '../images/AboutBrian.png';
import spacebg from '../images/spacebg.jpg';
import './About.css';
const AboutMe = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024 && window.innerWidth < 1440);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
            setIsDesktop(window.innerWidth >= 1024 && window.innerWidth < 1440);
            setIsLargeScreen(window.innerWidth >= 1440);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        about: {
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'center',
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isLargeScreen ? '100%' : '100%',
            margin: isLargeScreen ? '0 auto' : '0',
        },
        img: {
            height: isMobile ? '550px' 
                : isTablet ? '600px' 
                : isDesktop ? '950px' 
                : '950px', // Large screen image height
            width: 'auto',
            marginTop: isMobile ? '15rem': isLargeScreen ? '8rem' : '0rem',
            marginLeft: isMobile ? '10rem' : '10rem',
            marginRight: isMobile ? '-10rem' : isLargeScreen ? '-10rem' : '10rem',
        },
        name: {
            color: 'white',
            fontFamily: 'Anta, sans-serif',
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: isMobile ? '2.5rem' 
                : isTablet ? '3rem' 
                : isDesktop ? '4rem' 
                : '5rem', // Large screen font size
            marginLeft: isMobile ? '0rem': '10rem',
            marginTop: isMobile ? '5rem' : isLargeScreen ? '-8rem' : '20rem',
        },
        para: {
            fontFamily: 'Anta, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: isMobile ? '1.2rem' 
                : isTablet ? '1.2rem' 
                : isDesktop ? '1.5rem' 
                : '1.8rem', // Larger text for large screens
            color: 'white',
            margin: isMobile ? '0rem' : isLargeScreen ? '0rem 20rem -2rem 10rem' : '0rem 20rem -2rem 10rem',
            marginRight: isMobile ? '-5rem' : isLargeScreen ? '-10rem' : '10rem',
            marginBottom: isMobile ? '2rem' : '10rem',
            maxWidth: isLargeScreen ? '70%' : '100%',
        },
        bodySpace: {
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
    };

  return (
    <>
    <div className='body-space' style = {styles.bodySpace}>
        <div className='bg' style={{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spacebg})`}}>
        <div style={styles.about}>
            <div style={styles.intro}>
                <motion.div
                    animate={{ x:50 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    whileInView={ true }
                    viewport={{ once: true }}>
                    <h1 style={styles.name} className='name'>Brian Barker</h1>
                    <p style={styles.para} className='para'>Welcome! I am a hardworking veteran looking to enter the tech field.
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
                <img className='img' src={me} alt='me' style={styles.img}/>
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
  },
  bodySpace:{
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden'
  }

}

