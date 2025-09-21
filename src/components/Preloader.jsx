import React from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-overlay">
      <img src="/Spinner.gif" alt="Loading..." className="gif-loader" />
    </div>
  );
};

export default Preloader;
