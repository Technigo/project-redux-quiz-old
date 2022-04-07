import React from 'react';

export const Audio = () => {
  
  return (
    <div>
    <audio controls>
    <source src="/assets/elephantSound.mp3" type="audio/mp3"/>
    Your browser does not support the audio element.
    </audio>
    </div>
  );
};