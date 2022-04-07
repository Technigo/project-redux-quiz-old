import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";

import { Background, FlexDiv, RightAnswerWrapper, RightAnswerDisplay, RightAnswer, ResultHeading } from "styles";

export const Results = () => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.quiz.answers);
  console.log(answers)

  const handleQuizRestart = () => {
    dispatch(quiz.actions.restart())
  };

  return (
    <Background>
      <ResultHeading>Correct answers</ResultHeading>
      <FlexDiv>
      {answers.map(answer => (
        <RightAnswerWrapper key={answer.question.id}>
          <RightAnswerDisplay>{answer.question.options[answer.question.correctAnswerIndex]}</RightAnswerDisplay>
          <RightAnswer>Your Answer: {answer.answer} 
            {answer.isCorrect 
              ? <span role="img" aria-label="trophy icon"> 🏆</span> 
              : <span role="img" aria-label="cross icon"> ❌</span>
            }
          </RightAnswer>
          <p>Fun Fact: {answer.question.funFact}</p>
        </RightAnswerWrapper>
      ))}
      </FlexDiv>
      <button onClick={handleQuizRestart}>Restart</button>
    </Background>
  )
};
