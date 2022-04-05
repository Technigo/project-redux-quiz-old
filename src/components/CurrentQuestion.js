import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Summary } from 'components/Summary';
import styled from 'styled-components'

export const QuestionBackground = styled.body`
  margin: 0;
  background-color: lightpink;
  height: 100vh;
  padding: 30px;
`
const QuestionContainer = styled.div`
  background-color: pink;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`

export const CurrentQuestion = () => {
  // @ida getting data from the store / "postnord"
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // const answer = useSelector(
  //   (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  // )

  // @ida simply to add a console.log
  const store = useSelector((state) => state);
  console.log(store, 'store');

  // @joanna - added to be able to push user through to Summary after last question. 
  const quizOver = useSelector((store) => store.quiz.quizOver)

  // @ida forwarding data from the store / updating the store / "DHL"
  const dispatch = useDispatch();
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    if (question.correctAnswerIndex === index) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      alert('Wrong answer, pls try again!');
    }
  };

  // This pushes the user to the Summary after last question. 
  if (quizOver === true) {
    return <Summary />;
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <QuestionBackground>
      <QuestionContainer>
        <div>
          <h1>Question: {question.questionText}</h1>
          {question.options.map((item, index) => {
            return (
              <button
                type="button"
                key={item}
                onClick={() => onAnswerSubmit(question.id, index)}>
                {item}
              </button>
            );
          })}
        </div>
      </QuestionContainer>
    </QuestionBackground>
  );
};
