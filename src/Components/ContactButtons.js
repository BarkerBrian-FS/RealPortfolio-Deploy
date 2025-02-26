import React from 'react';
import { motion } from 'framer-motion';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import './Contact.css';
const ContactButtons = () => {
  return (
    <div>
        <div style={styles.contact}>
            <motion.div
                whileHover={{ scale: 1.1 }} style={styles.github} className='github'>
                    <a href='https://github.com/BarkerBrian-FS?tab=repositories'><img  style={styles.github} src={github} alt='github'/></a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }} className='linkedIn'>
                    <a href='https://www.linkedin.com/in/brian-barker-498537202/'><img  style={styles.linkedIn} src={linkedIn}  alt='linkedIn'/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactButtons

const styles = {
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
  contact:{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '43%',
      marginRight: 'auto',
      marginTop: '40px',
      justifyContent: 'spaceBetween',
  }
}