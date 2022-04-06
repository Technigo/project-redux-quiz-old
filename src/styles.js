import styled from "styled-components";

export const ProgressIcons = styled.p`
  background-color: ${props => props.right
    ? "green"
    : props.wrong
    ? "red"
    : "grey" 
  };
  border-radius: 50%;
  width: 50px;
  height: 50px;
`

export const ProgressIconsWrapper = styled.div`
  display: flex;
`

export const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1549896869-ca27eeffe4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
  height: 150vh;
  width: 100vw;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
`

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 60px;
`

export const ResultHeading = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: #333333;
`

export const RightAnswerDisplay = styled.h2`
  background-color: #BB6DD7;
  border-radius: 10px;
  padding: 10px;
  color: white;
`

export const BackgroundDiv = styled.div`
  background-image: url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  height: 150vh;
  width: 100vw;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
`

export const FlexQuestionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
`

export const QuestionAlternatives = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;

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
  width: 30vw;
  color: white;

  @media (min-width: 768px) {
    
  }
`

export const QuestionHeading = styled.h1`
    text-transform: uppercase;
`