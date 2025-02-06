import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../videos/BarkerDevelopment.json';

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
        <div className="loading-screen">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      )
    );
  };
  
  export default LoadingScreen;