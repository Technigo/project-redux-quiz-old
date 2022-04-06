import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "reducers/quiz";
import { ProgressBar } from "components/ProgressBar";

import { 
  BackgroundDiv, 
  FlexQuestionDiv, 
  QuestionAlternatives, 
  QuestionButtons, 
  QuestionHeading 
} from "styles";

export const QuizQuestions = () => {
  const [isClicked, setIsClicked] = useState(false);
 
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const dispatch = useDispatch();
    
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    setIsClicked(true)
  };

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsClicked(false)
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  };

  return (
    <BackgroundDiv>
      <FlexQuestionDiv>
        <QuestionHeading>Question:</QuestionHeading> 
        <h2>{question.questionText}</h2>
        <QuestionAlternatives>
        {question.options.map((item, index) => (
          <QuestionButtons
            key={item}
            disabled={isClicked}
            onClick={() => { onAnswerSubmit(question.id, index) }}
          >{item}
          </QuestionButtons>
        ))}
        </QuestionAlternatives>
      {question.id === 5
        ? <button onClick={handleNextQuestion}>Submit Quiz</button>
        : <button onClick={handleNextQuestion}>Next question</button>
      }
      <ProgressBar />
      </FlexQuestionDiv>
    </BackgroundDiv>
  )
};
