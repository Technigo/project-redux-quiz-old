import React from 'react';

const Audio = (props) => {
  
  return (
    <div>
    <audio controls>
  <source src="/assets/audio/SummerNights.mp3" type="audio/mp3"/>
Your browser does not support the audio element.
</audio>
    </div>

	);
};

export default Audio;