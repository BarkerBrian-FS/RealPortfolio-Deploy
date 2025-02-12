import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../videos/SpinninLogo.json';
import LogoBackground from '../images/LogoBackground.jpg';
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
        <div className="loading-screen" style={style.loadingScreen}>
          <Lottie options={defaultOptions} height={950} width={950} />
        </div>
      )
    );
  };
  
  export default LoadingScreen;

const style = {
  loadingScreen:{
    backgroundImage: `url(${LogoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  }

}
