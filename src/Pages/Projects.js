import React from 'react';
import Nav from '../Components/topNav';
import spaceBgProject from '../images/spaceBgProject.jpg';
import Video from '../Components/videoDisplay';
import './Projects.css';

const Projects = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div class='space' style= {{backgroundImage: `url(${spaceBgProject})`}} >
            <div className='video'>
                <Video/>
            </div>
        </div>
        </>
    )
};

export default Projects

