import React from 'react';
import { motion } from 'framer-motion';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';

const ContactButtons = () => {
  return (
    <div>
        <div style={styles.contactBtn}>
            <motion.div
                whileHover={{ scale: 1.1 }} style={styles.github}>
                    <a href='https://github.com/BarkerBrian-FS?tab=repositories'><img  style={styles.github} src={github} alt='github'/></a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}>
                    <a href='https://www.linkedin.com/in/brian-barker-498537202/'><img  style={styles.linkedIn} src={linkedIn}  alt='linkedIn'/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactButtons

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