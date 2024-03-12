import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/topNav';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import ContactForm from '../Components/contactForm'
import spaceBg2 from '../images/spaceBg2.jpg'

const Contact = () => {
    return(
    <>
        <div>
            <Nav/>
        </div>
        <div>
        <div class='spaceBg2' style= {{backgroundImage: `url(${spaceBg2})`}} >
            <div style={styles.contactForm}>
                <ContactForm/>
            </div>
            <div style={styles.contactBtn}>
                <div>
                    <a href='https://github.com/BarkerBrian-FS?tab=repositories'><img  style={styles.github} src={github} alt='github'/></a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/brian-barker-498537202/'><img  style={styles.linkedIn} src={linkedIn}  alt='linkedIn'/></a>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Contact

const styles={
    github:{
        height: '105px',
        width: '105px',
        marginRight: '10px'
    },
    linkedIn:{
        height: '105px',
        width: '105px',
        marginLeft: '10px'
    },
    contactForm:{
        width: '100%'
    },
    contactBtn:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '43%',
        marginRight: 'auto',
        marginTop: '40px',
        justifyContent: 'spaceBetween',
        
    }

}