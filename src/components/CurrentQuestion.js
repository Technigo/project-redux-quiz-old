import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { Summary } from 'components/Summary'
import { ProgressBar } from 'components/ProgressBar'
import { OuterWrapper, InnerWrapper } from 'styling/Wrappers'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  console.log(wholeStore);
  console.log(question);

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (isQuizOver === true) {
    return (<Summary />)
  }

  // const onAnswerSubmit = (id, index) => {
  //   dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  // }
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('Sorry, wrong answer');
    }
  }
  return (
    <OuterWrapper>
      <InnerWrapper>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((option, index) => {
          return <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
        })}
        <ProgressBar />
      </InnerWrapper>
    </OuterWrapper>
  )
}
