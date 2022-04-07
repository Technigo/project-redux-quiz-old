import React from 'react';

 /* export const elephantSound = new Audio ("assets/elephantSound.mp3")*/

export const Audio = () => {  
  return (
    
    <div>
      <audio controls autoPlay>
        <source src="assets/Airplanesound.wav" type='audio/wav'/>
      
  
        Your browser does not support the audio element.
      </audio>

    </div>
  );
};