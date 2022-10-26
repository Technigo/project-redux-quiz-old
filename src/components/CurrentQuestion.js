import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { SummaryPage } from '../pages/SummaryPage'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

  if
  (quizOver === true) {
    return <SummaryPage />;
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('WRONG!!');
      dispatch(quiz.actions.goToNextQuestion());
    }
  }
  // I framtiden byt ut goToNextQ till bli röd och sen lägga till en nästa-knapp

  return (
    <div>
      <h1>From which movie does this quote come from?</h1>
      <h2>{question.questionText}</h2>
      {question.options.map((option, index) => {
        return <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
      })}
    </div>
  )
}
