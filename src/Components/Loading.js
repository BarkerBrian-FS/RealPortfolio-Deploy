import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../videos/SpinninLogo.json';
import LogoBackground from '../images/LogoBackground.jpg';
import './Loading.css';
const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate an API call or loading process
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    }, []);
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
    return (
      isLoading && (
        <div className="loading" style={style.loadingScreen}>
          <Lottie className="lottie-player" options={defaultOptions} style={style.lottieImage}  />
        </div>
      )
    );
  };
  
  export default LoadingScreen;

const style = {
  loadingScreen:{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '120vh',
    width: '100vw',
  },
  backgroundImage: {
    backgroundImage: `url(${LogoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  },
  lottieImage:{
    width: '30rem',
    height: '30rem',
  }

  

}
