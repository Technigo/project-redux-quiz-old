import React from 'react'

const ImageButton = ({ item, onSubmitAnswer }) => {
  return (
    <div className="ImgContainer">
      <button 
        className="buttonImg"
        style={{backgroundImage: `url(${item})`}}
        type="button"
        key={item}
        onClick={() => onSubmitAnswer()}
      ></button>
    </div>
  )
}

export default ImageButton