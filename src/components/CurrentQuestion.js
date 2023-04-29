/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useSelector } from 'react-redux'
import { AnswerButton } from './Button'
import { QuestionTitle, QuestionWrapper, QuestionText, ButtonWrapper } from './CurrentQuestionStyling'
import { Summary } from './Summary';
import { ProgressBar } from './ProgressBar';

export const CurrentQuestion = () => {
  // const [disabled, setDisabled] = useState(false);

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const userAnswer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id));
  if (!question) {
    return <h2>Oh no! I could not find the current question!</h2>
  }
  if (quizOver) {
    return (
      <Summary />
    )
  }

  return (
    <QuestionWrapper>
      <QuestionTitle>{question.questionText}</QuestionTitle>
      <QuestionText>{question.id}/5</QuestionText>
      <ButtonWrapper>
        {question.options.map((item, index) => (
          <AnswerButton
            key={item}
            item={item}
            index={index}
            questionId={question.id}
            question={question}
            answer={userAnswer}
            disabled={userAnswer} />
        ))}
      </ButtonWrapper>
      <ProgressBar />
    </QuestionWrapper>
  )
}