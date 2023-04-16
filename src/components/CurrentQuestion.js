/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { useSelector } from 'react-redux'
// import { quiz } from 'reducers/quiz';
import { QuestionTitle, QuestionWrapper, QuestionText, ButtonWrapper } from './CurrentQuestionStyling'
import { AnswerButton, NextQuestion } from './Button'
import { SummaryTest } from './SummaryTest'

export const CurrentQuestion = () => {
  // const [disabled, setDisabled] = useState(false);

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  // const dispatch = useDispatch();
  // const answerSubmit = (id, index) => {
  //   dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  // }
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const userAnswer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id));

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  if (quizOver) {
    return (
      <SummaryTest />
    )
  }

  return (
    <QuestionWrapper>
      <QuestionTitle><h1>{question.questionText}</h1></QuestionTitle>
      <QuestionText><p>{question.id}/5</p></QuestionText>
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
      <NextQuestion />
    </QuestionWrapper>
  )
}
