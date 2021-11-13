import React from  'react'
import stripes from '../stripes.png'


export const BackgroundImage = () => {

    return (
        <div className='background-stripes' style={{ backgroundImage: `url(${stripes})` }}>
        </div>
    )

}
