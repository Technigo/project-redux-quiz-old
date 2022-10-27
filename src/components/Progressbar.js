import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const ProgressContainer = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 15px; 
  background-color: #E6A03D;
  position: relative;
  overflow: hidden;
  display: flex;
  margin-top: 25px; 
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
`;

const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background: linear-gradient(
    90deg,
    #49BD6A 0%,
    #49BD6A 100%
  );
  transition: width 1s ease-in-out;
  height: 100%;
  position: absolute;
  top: 0;
`;
const Amount = styled.label`
  color: black; 
  position: relative;
  align-self: center;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 2vw;
  font-weight: bold;
  line-height: 2vw;
  white-space: wrap;`

const Wrapper = styled.div`
display: block; 
padding: 3em;  
`

const ProgressBar = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const amountOfQuestions = useSelector((state) => state.quiz.questions.length);
  const percentCompleted = `${useSelector(
    (store) => (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;
  return (
    <Wrapper>
      <Amount> QUESTION:
        {question.id} / {amountOfQuestions}
      </Amount>
      <ProgressContainer>

        <ProgressStatus width={percentCompleted} />
      </ProgressContainer>
    </Wrapper>
  )
}
export default ProgressBar