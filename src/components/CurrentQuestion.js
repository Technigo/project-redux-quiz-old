import React from 'react';
import { useSelector } from 'react-redux';
import Options from 'components/Options';
import ProgressBar from 'components/ProgressBar';
import Timer from 'components/Timer'
import { Container, Answers, ImgBackground } from './Styles/GlobalStyles';
import Summary from './Summary';

const CurrentQuestion = () => {
  const questions = useSelector((state) => state.quiz.questions.length)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  if
  (quizOver === true) {
    return <Summary />;
  }

  const bgcolor = 'rgba(25, 22, 213, 0.772)';
  const completed = Math.round((question.id / questions) * 100);

  return (
    <ImgBackground>
      <Container>
        <ProgressBar bgcolor={bgcolor} completed={completed} />
        <Timer questionId={question.id} />
        <h1>Question: {question.questionText}</h1>
        <Answers>
          {question.options.map((option, answerIndex) => (
            <Options
              key={option.id}
              option={option}
              answerIndex={answerIndex} />
          ))}
        </Answers>
      </Container>
    </ImgBackground>
  )
};

export default CurrentQuestion;
