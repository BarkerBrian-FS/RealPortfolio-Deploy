import React from 'react'
import { motion } from 'framer-motion';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';
import galaxyBg from '../images/galaxyBg.jpg'

const Experience = () => {
  return (
    <div>
            <div id='experience' class='rocketBg' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${galaxyBg})`}} >
                        <div style={styles.experience}>
                            <div style= {styles.htmlBlock}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <img style={styles.html} src={html} alt='html'/>
                                </motion.div>
                                <motion.div
                                   initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <p>3 years of experience working with HTML5</p>
                                </motion.div>
                            </div>
                            <div style={styles.cssBlock}>
                                <motion.div
                                   initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <img style={styles.css} src={css} alt='css'/>
                                </motion.div>
                                <motion.div
                                   initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <p>3 years of experience working with CSS</p>
                                </motion.div>
                            </div>
                            <div style={styles.jsBlock}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <img style={styles.js} src={js} alt='javascript'/>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <p>3 years of experience working with Javascript</p>
                                </motion.div>
                            </div>
                            <div style={styles.nodeBlock}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <img style={styles.node} src={nodejs} alt='nodejs'/>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }} 
                                    viewport={{ once: true }}>
                                    <p>3 years of experience working with NodeJs</p>
                                </motion.div>
                            </div>
                            <div style={styles.reactBlock}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <img style={styles.react} src={react} alt='react'/>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <p>3 years of experience working with React</p>
                                </motion.div>
                            </div>
                            <div style={styles.mongoBlock}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <img style={styles.mongo} src={mongo} alt='mongodb'/>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <p>3 years of experience working with MongoDb</p>
                                </motion.div>
                            </div>
                            <div style={styles.figmaBlock}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <img style={styles.figma} src={figma} alt='figma'/>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}>
                                    <p>3 years designing websites and apps with Figma</p>
                                </motion.div>
                            </div>
                        </div>
            </div>
        </div>
  )
}

export default Experience

const styles={
    


}