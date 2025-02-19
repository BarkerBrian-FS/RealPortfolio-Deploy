import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import me from '../images/AboutBrian.png';
import spacebg from '../images/spacebg.jpg';
import Nav from '../Components/topNav';

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
                /*animate={{ x:-100 }}
                transition={{ ease: "easeOut", duration: 3 }}
                initial={{ scale: .5 }}
                whileInView={{ scale: 1.1, }}*/
                ref={ref} // Set the ref for intersection observer
                initial={{ x: '100vw' }} // Start off-screen to right side
                animate={{ x: isInView ? 0 : '-10vw' }} // Move to the normal position when in view
                //spring animation at the end of movement 
                transition={{ type: 'spring', stiffness: 100, damping: 50 }}
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

}