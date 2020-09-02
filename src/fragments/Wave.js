import React from 'react';
import waves from '../assets/waves.png';

function Wave() {
    return (
        <div className="waveTransition">
            <img src={waves} alt="Page transition"/>
        </div>    
    )
}

export default Wave;