import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import './currentQuestion.css'

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const answers = useSelector((store) => store.quiz.answers);
  const currentQuestionIndex = useSelector((store) => store.quiz.currentQuestionIndex);
  const quizOver = useSelector((store) => store.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOnChange = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }

  const handleOnClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    !quizOver && <section className="question_container">
      <div className="question_title">Animal&apos;s quiz</div>
      <h1 className="question_text">{question.questionText}</h1>

      {question.options.map((option, index) => {
        let isCorrect = '';
        const currentAnswer = answers[currentQuestionIndex];
        if (currentAnswer && question.correctAnswerIndex === index) {
          isCorrect = 'option_correct'
        } else if (currentAnswer
          && currentAnswer.isCorrect === false
          && currentAnswer.answerIndex === index) {
          isCorrect = 'option_incorrect'
        }
        return (
          <button
            key={option}
            className={`option_button ${isCorrect}`}
            type="button"
            onClick={() => handleOnChange(index)}
            disabled={answers[currentQuestionIndex]}>
            {option}
          </button>)
      })}

      <button
        type="button"
        disabled={!answers[currentQuestionIndex]}
        className={`next_question_button ${!answers[currentQuestionIndex] && 'disable'}`}
        onClick={() => handleOnClick()}>
          Next Question
      </button>
    </section>
  )
}
