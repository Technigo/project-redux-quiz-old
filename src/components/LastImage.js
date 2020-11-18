import React from 'react'

import friends from './images/friends.jpg'

export const SadImage = () => {
    return (
        <>
            <img src={friends} className="question-image summary-image" alt="last image" />
        </>
    )
}