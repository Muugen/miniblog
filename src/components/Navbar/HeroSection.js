import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={process.env.PUBLIC_URL + "/vid/video.mp4"} autoPlay loop muted />
            <h1>Bienvenue sur le Cube</h1>
        </div>
    )
}

export default HeroSection

