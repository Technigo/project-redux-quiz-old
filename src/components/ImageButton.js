import React from "react";
import styled from "styled-components/macro";

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 150px;
  min-height: 300px;

  @media (min-width: 768px) {
    max-width: 370px;
    min-height: 150px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
    min-height: 350px;
  }
`;

const ButtonImage = styled.button`
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`;

const ImageButton = ({ item, onSubmitAnswer }) => {
  return (
    <ImgContainer>
      <ButtonImage
        style={{ backgroundImage: `url(${item})` }}
        type="button"
        key={item}
        onClick={() => onSubmitAnswer()}
      ></ButtonImage>
    </ImgContainer>
  );
};

export default ImageButton;
