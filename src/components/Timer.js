import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";


const Timer = () => {
    const amountOfTime = useSelector((state) => state.quiz.time)
    const dispatch = useDispatch()
  
    useEffect(() => {
        const countTime = setInterval(() => {
          dispatch(quiz.actions.addTime())
        }, 1000)
        return () => {
          clearInterval(countTime)
        }
    }, [dispatch])

    return (
      <p className="timer">
        {`${amountOfTime} seconds`}
      </p>
    )

}

export default Timer


///// Commented out code, left for possible later use (will clean up at some point):

    // const [second, setSecond] = useState(initialSecond);

  //   useEffect(() => {
  //     const countdownTimer = setInterval(() => {
  //       if (second > 0) {
  //           setSecond((second) => second - 1);
  //       } else if (second === 0) {
  //           setSecond((second) => second + 10)
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(countdownTimer);
  //     };
  //   });
  
  //   return [second];
  // };

// if (seconds > 0) {
//     setSeconds(seconds - 1)
// } else if (seconds <= 0) {
//     clearInterval(downloadTimer)
// }
//     return (
//         <div className="timer">
//             {seconds === 0 ? "Finished" : `${seconds} seconds remaining`}
//         </div>
//     )

    // let timeleft = 10;

    // const myTimer = () => {
    //     timeleft -= 1;
    //     if (timeleft <= 0) {
    //         clearInterval(downloadTimer);
    //         return "Finished"
    //     } else {
    //         return (timeleft + " seconds remaining")
    //     }
    //     console.log("time left:", timeleft)
    // }

    // const downloadTimer = setInterval(myTimer, 1000)

    // timeleft < 0 ? "Finished" : "seconds remaining"

//     let timeleft = 10;

//    const downloadTimer = setInterval(() => {
//         console.log("time left:", timeleft)
//         timeleft -= 1;
//         if (timeleft <= -1) {
//             clearInterval(downloadTimer);
//             return "Finished"
//             console.log("finished")
//         } else {
//             return (timeleft) + " seconds remaining"
//             console.log(timeleft, "seconds remaining")
//         }
//     }, 1000);
    

//         return (
//             <>
//                 {downloadTimer}
//             </>
//         )


