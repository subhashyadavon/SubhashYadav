import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="loader-container">
                <div className="spinner">
                    <div className="inner-ring"></div>
                </div>
                <div className="center-dot"></div>
            </div>
        </div>
    );
};

export default Preloader;
