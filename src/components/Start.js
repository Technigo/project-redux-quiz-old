import React, { useState } from "react";

export const Start = ({start}) => {
    return (
        
        <div>
            <h1>Technigo Team Quiz</h1>
            <button className="next-button" onClick={() => start(true)}>Start</button>
        </div>
    )
}

