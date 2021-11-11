import React from 'react'

const ImageButton = (props) => {
  return (
    <div className="ImgContainer">
      <button 
        className="buttonImg"
        style={props.style}
        type="button"
        key={props.key}
        onClick={props.onClick}
      ></button>
    </div>
  )
}

export default ImageButton
