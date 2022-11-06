import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { NextButton } from 'components/NextButton';
import { OuterWrapper, InnerWrapper, MainQuestion, Devices, PageContainer } from '../components/MainStyles';

// First page the user gets to before the quiz starts
export const Welcome = () => {
  const navigate = useNavigate();

  // Function that navigates the user to the first question of the quiz, when the button is clicked
  const moveToQuiz = () => {
    navigate('/quiz');
  }

  return (
    <OuterWrapper>
      <ClonedInnerWrapper>
        <Container>
          <TextContainer>
            <div className="Intro-Text">
              <MainHeader>Halloween Quiz</MainHeader>
              <WelcomeText>
            Get ready for a spooky quiz! Gather your friends
            and family and find out who&apos;s the real king or queen of horror
              </WelcomeText>
              <div className="Button">
                <NextButton clickAction={moveToQuiz} content="Start Quiz" />
              </div>
            </div>
          </TextContainer>
        </Container>
        <FooterContainer>
          <SecondHeader>Developed and designed by</SecondHeader>
          <LinkContainer>
            <Link
              href="https://www.linkedin.com/in/linda-malm-7aa8866b/"
              target="_blank">Linda Malm
            </Link>
            <Link
              href="https://www.linkedin.com/in/tina-bruce-9b1a0813a/"
              target="_blank">Tina Bruce
            </Link>
            <Link
              href="https://www.linkedin.com/in/jesshansson/"
              target="_blank">Jessica Hansson
            </Link>
            <Link
              href="https://www.linkedin.com/in/emil-bergvik/"
              target="_blank">Emil Bergvik
            </Link>
            <Link
              href="https://www.linkedin.com/in/ceciliaraden/"
              target="_blank">Cecilia Rådén
            </Link>
          </LinkContainer>
        </FooterContainer>
      </ClonedInnerWrapper>
    </OuterWrapper>
  )
}

// The local styled components
const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0% 0% 5% 0%;
`

const ClonedInnerWrapper = styled(InnerWrapper)`
  margin: 5%;
`

const MainHeader = styled(MainQuestion)`
  font-size: 3em;
  text-align: center;
  color: #FFCD42;
`

const SecondHeader = styled.h2`
  font-family: 'Courier Prime', monospace;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
  color: #FFCD42;
`

const WelcomeText = styled.p`
  font-family: 'Courier Prime', monospace;
  line-height: 22px;
`

const TextContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  width: 50%;
  height: 50%;

  .Button {
    text-align: center;
    padding: 15px;
  }

  @media ${Devices.laptop} {
    width: 80%;
    height: 50%;
  }

  @media ${Devices.desktop} {
    width: 80%;
    height: 50%;
  }
`

const FooterContainer = styled.div`
  color: white;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;

  @media ${Devices.laptop} {
    margin-top: 30%;
  }

  @media ${Devices.laptopL} {
    margin-top: 40%;
  }
`

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media ${Devices.laptop} {
    display: flex;
  }
`

const Link = styled.a`
  font-family: 'Courier Prime', monospace;
  color: white;
  text-decoration: none;
  flex-direction: column;
  display: flex;
  margin: 5px;

@media ${Devices.laptop} {
  display: flex;
  margin: 10px;

  &:hover {
    color: #B74F26;
    transition: all .2s ease-in-out;
    transform: scale(1.1);
  }
}
`
