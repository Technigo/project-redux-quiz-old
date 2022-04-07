import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
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
  height: 85vh;
  color: white;
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
  background-color: rgba(255, 255, 255, 0.6);
  width: 175px;
  color: white;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Background = styled(Hero)`
  background-image: url("/images/track.jpg");
`

export const ResultHeading = styled.h2`
  text-align: center;
  padding-top: 50px;
  margin: 0;
  text-transform: uppercase;
  color: #333333;
`

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 20px;
  text-align: center;
  padding-top: 60px;
`

export const RightAnswerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const RightAnswerDisplay = styled.h3`
  background-color: #BB6DD7;
  border-radius: 10px;
  padding: 10px;
  color: white;
  width: 200px;
`

export const RightAnswer = styled.p`
  margin-bottom: 0;
`