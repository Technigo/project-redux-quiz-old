// import React from 'react';
// import Countdown from 'react-countdown';

// export const Timer = () => {
//   <Countdown date={Date.now() + 10000} />
// }

// import React, { useState, useEffect } from 'react';

// export const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(() => seconds + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [seconds]);

//   return (
//     <div>
//       <h1>{seconds} seconds</h1>
//     </div>
//   );
// }
