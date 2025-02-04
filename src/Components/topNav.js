import React from 'react';
import './Nav.css';

const Nav = () => {
    return(
        <>
        <header style = {styles.myHeader}>
            <div  style = {styles.logo} >
                <h1 >Portfolio</h1>
            </div>
            <nav className='navLink' style = {styles.nav} >
                <li><a href="#experience" style={styles.link}>Experience</a></li>
                <li><a href="#projects" style={styles.link}>Projects</a></li>
                <li><a href="#contact" style={styles.link}>Contact</a></li>
             </nav>
        </header>
        </>
    );
};

export default Nav

const styles= {
    myHeader:{
        padding: '1%',
        backgroundColor: 'black',
        color: '#F2AF29',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo:{
        fontFamily: 'Anta, sans-serif',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '1.8rem',
        marginRight: '10%',
        marginLeft: '2.5%',
        marginTop: '-.5%',
        color: '#e0e1dd'
        
    },
    nav:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%'
    },
    link:{
        fontFamily: 'Anta, sans-serif',
        fontWeight: 200,
        fontStyle: 'normal',
        fontSize: '1.8rem',
        margin: ".5rem",
        textDecoration: "none",
        color: '#e0e1dd'
    }
};