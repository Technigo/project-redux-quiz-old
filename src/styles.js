import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const ProgressIcons = styled.p`
  background-color: ${props => props.right
    ? "#52af5c"
    : props.wrong
    ? "#fc2041"
    : "grey" 
  };
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`

export const ProgressIconsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const QuestionContainer = styled(Hero)`
  background-image: url("/images/background.jpg");
  background-size: cover;
  overflow: hidden;
`

export const FlexQuestionDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 85vh;
`

export const QuestionHeading = styled.h2`
  text-transform: uppercase;
`

export const Question = styled.h3`
  text-align: center;
`

export const QuestionAlternatives = styled(Div)`
  width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export const QuestionButtons = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 175px;
  color: white;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Background = styled(Hero)`
  background-image: url("/images/track.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ResultHeading = styled.h2`
  padding-top: 50px;
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: #333333;

  @media (min-width: 992px) {
    font-size: 32px;
  }
`

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 20px 25px;
  text-align: center;
  padding-top: 60px;
`

export const RightAnswerWrapper = styled.section`
  background-color: #BB6DD7;
  border-radius: 10px;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }
`

export const RightAnswer = styled.p`
  margin-bottom: 0;
`

export const RestartButton = styled.button`
  margin: 0 0 30px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  width: 175px;
  color: white;
`