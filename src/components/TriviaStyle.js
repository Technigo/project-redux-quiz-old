import React from 'react';
import styled from 'styled-components';

const TriviaStyle = ({ text, placeholder }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <ImgWrapper>
          <Triangle alt="triangle" src="../assets/green.png" />
          <Triangle alt="triangle" src="../assets/yellow.png" />
          <Triangle alt="triangle" src="../assets/orange.png" />
          <Triangle alt="triangle" src="../assets/pink.png" />
          <Triangle alt="triangle" src="../assets/blue.png" />
          <Triangle alt="triangle" src="../assets/purple.png" />
        </ImgWrapper>
        <Title>Trivial Pursuit</Title>
      </TitleWrapper>
      <Text>{text}</Text>
      <StartWrapper style={{ backgroundImage: 'url("../assets/cake.png")' }}>
        {placeholder}
      </StartWrapper>
    </Wrapper>
  )
};

export default TriviaStyle;

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px) {
    width: 60%;
  }
`;

const Triangle = styled.img`
  width: 18px;
  transform: rotate(180deg);
  margin: 2px 4px;
`;

const ImgWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const TitleWrapper = styled.div`
  background-color: #0f2841;
  box-shadow: 7px 7px 13px 0px rgba(0,0,0,0.75);
   -webkit-box-shadow: 7px 7px 13px 0px rgba(0,0,0,0.75);
   -moz-box-shadow: 7px 7px 13px 0px rgba(0,0,0,0.75);
  width: fit-content;
  margin: 0;
  border-radius: 35px;
  padding: 6px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px) {
    padding: 6px 24px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0;
`;

const Text = styled.p`
  width: 100%;
  font-size: 18px;
  color: white;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  font-weight: bold;

  @media (min-width: 667px) {
    width: 92%;
  }
`;

const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-position: center;
  background-size: contain;
  transition-duration: 2s;
  transition-property: transform;

  &:hover {
    transform: rotate(360deg);
  }
`;