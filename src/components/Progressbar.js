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
color: red; `

const Wrapper = styled.div`
display:block; 
padding: 1em;  `

const ProgressBar = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const amountOfQuestions = useSelector((state) => state.quiz.questions.length);
  const percentCompleted = `${useSelector(
    (store) => (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;
  return (
    <Wrapper>
      <Amount> Please add something here
        {question.id} / {amountOfQuestions}
      </Amount>
      <ProgressContainer>

        <ProgressStatus width={percentCompleted} />
      </ProgressContainer>
    </Wrapper>
  )
}
export default ProgressBar