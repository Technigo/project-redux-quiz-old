import React from "react"


const Timer = () => {

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
    //     console.log("download timer", downloadTimer)

    // timeleft < 0 ? "Finished" : "seconds remaining"

    let timeleft = 10;

   const downloadTimer = setInterval(() => {
        console.log("time left:", timeleft)
        timeleft -= 1;
        if (timeleft <= -1) {
            clearInterval(downloadTimer);
            return "Finished"
            console.log("finished")
        } else {
            return (timeleft) + " seconds remaining"
            console.log(timeleft, "seconds remaining")
        }
    }, 1000);

    console.log("time left", timeleft)
    

        return (
            <>
                {downloadTimer}
            </>
        )

   
    
}
    // let date = new Date();
    // let sec = date.getSeconds();
    // let min = date.getMinutes();

    // const timeHandler = () => {
    //     sec--;
    //     if (sec == 60) {
    //         sec = 0;
    //         min--;
    //     } else if (sec < 0) {
    //         date.setSeconds(0);
    //         } else if (min < 0) {
    //         date.setMinutes(0);
    //     }
    // }

    // document.getElementById("time").innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
    // };

    // timeHandler();
    // setInterval(timeHandler, 1000); 

    // return ( 
    //     <>
    //     {(sec < 10 ? "0" + sec : sec)}
    //     </>   
    // )


export default Timer