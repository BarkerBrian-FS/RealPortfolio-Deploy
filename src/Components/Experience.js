import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';
import galaxyBg from '../images/galaxyBg.jpg';
import './Experience.css';

const skills = [
    { img: html, text: "HTML5", years: 3 },
    { img: css, text: "CSS", years: 3 },
    { img: js, text: "JavaScript", years: 3 },
    { img: nodejs, text: "Node.js", years: 3 },
    { img: react, text: "React.js", years: 3 },
    { img: mongo, text: "MongoDB", years: 3 },
    { img: figma, text: "Figma", years: 3 }
];

const Experience = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSkillText = (index) => {
        if (screenSize <= 500 && screenSize >= 340) {
            setSelectedSkill(selectedSkill === index ? null : index);
        }
    };

    return (
        <div 
            id='experience' 
            className='rocketBg' 
            style={{
                backgroundImage: `radial-gradient(transparent 40%, black 72%),
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${galaxyBg})`
            }}
        >
            {screenSize <= 500 && (
                <h1 style={styles.clickMeText}>Click Me!</h1>
            )}
            <div className="experience" style={styles.experience}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="exp-block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onClick={() => toggleSkillText(index)}
                        style={{ cursor: screenSize <= 425 ? 'pointer' : 'default' }}
                    >
                        <div className='expContent' style={styles.expBlock(screenSize)}>
                            <img
                                className='expLogo'
                                src={skill.img}
                                alt={skill.text}
                                loading="lazy"
                                style={styles.logo(screenSize)}
                            />
                            {(screenSize > 500 || selectedSkill === index) && (
                                <p className='expText' style={styles.text(screenSize)}>
                                    {skill.years}+ years of experience with {skill.text}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

const styles = {
    experience: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '80%',
        marginTop: '60px',
        flexWrap: 'wrap',
        padding: '0 20px',
    },
    clickMeText: {
        fontSize: '1.6rem',
        fontFamily: 'Anta, sans-serif',
        color: 'white',
        textAlign: 'center',
        marginTop: '60px',
        marginBottom: '-75px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    expBlock: (screenSize) => ({
        display: 'flex',
        flexDirection: screenSize <= 500 ? 'column' : 'row',
        alignItems: 'center',
        marginTop: screenSize <= 500 ? '60px' : '5rem',
        marginBottom: '60px',
        flexWrap: 'wrap',
        textAlign: screenSize <= 500 ? 'center' : 'left',
        maxWidth: '600px',
    }),
    logo: (screenSize) => ({
        height: screenSize <= 500 ? '60px' : screenSize <= 768 ? '70px' : '100px',
        width: screenSize <= 500 ? '60px' : screenSize <= 768 ? '70px' : '100px',
        flexShrink: 0,
    }),
    text: (screenSize) => ({
        fontFamily: 'Anta, sans-serif',
        fontSize: screenSize <= 500 ? '1rem' : screenSize <= 768 ? '1.2rem' : '1.5rem',
        color: 'white',
        marginLeft: screenSize <= 500 ? '0' : '20px',
        marginTop: screenSize <= 500 ? '10px' : '0',
    }),
};









