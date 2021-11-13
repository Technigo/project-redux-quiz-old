import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components/macro";

import { quiz } from "reducers/quiz";
import { Summary } from "components/Summary";
import ProgressBar from "@ramonak/react-progress-bar";
import AnswerButton from "./AnswerButton";
import ImageButton from "./ImageButton";
import "components/CurrentQuestion.css";

// styles components for current question

const MainContainer = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const QuizContainer = styled.div`
  height: 100%;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 15px;

  @media (min-width: 768px) {
    width: 760px;
    padding: 25px;
  }

  @media (min-width: 1024px) {
    width: 1000px;
  }
`;

const QuestionText = styled.h1`
  background-color: rgb(241, 235, 235);
  color: rgb(61, 61, 61);
  border-radius: 5px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  text-align: center;
  height: 155px;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
    inset 4px 4px 6px rgba(0, 0, 0, 0.2);
  animation: glow 1.5s linear infinite;

  @media (min-width: 768px) {
    font-size: 40px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

const AnswerText = styled.div`
  text-align: center;
  margin:0;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-area: repeat(4, 1fr);
  grid-gap: 10px;
  place-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-area: repeat(2, 1fr);
    grid-gap: 10px;
    place-items: center;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-area: repeat(2, 1fr);
    grid-gap: 10px;
    place-items: center;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgressText = styled.p`
  color: rgb(46, 45, 45);
  font-weight: 500;
`;

const ProgressAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  margin-left: 5px;
`;

export const CurrentQuestion = () => {
  /* useSelector is another hook, useSelector takes one argument,with this you can excess
  different slices in store, if we had more slices we could see it in the console;
  when writing store.quiz, you are more specific, you are execing only this slice */
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  /* Here we get the length of the arry(all the questions) */
  const questionsLength = useSelector((state) => state.quiz.questions.length);
  /* Here we pass the value from the "questionsLength" so we can decreas
  the value of questions left */
  const [questionsCount, setQuestionsCount] = useState(questionsLength);
  /* The progressbar for the question, using npm install
  --save @ramonak/react-progress-bar
  (read more here; c) */
  const [completed, setCompleted] = useState(20);
  /* in order to show summary.js we need to ask store to get uppdated value,
  that why using useSelector */
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );

  const showAnswer = () => {
    if (answer.isCorrect) {
      return "YAY! Correct answer! :)";
    } else {
      return "Sorry, wrong answer :(";
    }
  };

  /* dispatch all of the actions, dispatch some actions,
  that call reducers and reducers update the store, store detect that it was updated,
  calls selectors, selectors come to componenets with information -
  please refresh yourself and then lifecycle ends */
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // if isQuizOver is true, we return Summary component
  if (isQuizOver) {
    return <Summary />;
  }

  const onSubmitAnswer = (id, index) => {
    // what exact function we need to call to uppdate the store
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setTimeout(() => {
      // first dispatch is to call submitAnswer, and another one is to call goToNextQuestion function
      // because we want to go to the next question directly
      dispatch(quiz.actions.goToNextQuestion({ id }));
    }, 10000);
    /* when clicking a btn the value of questionsCount(=Question left) decreses  */
    setQuestionsCount(questionsCount - 1);
    /* Update the progress-bar while clickin with 20% */
    setCompleted(completed + 20);
  };

  return (
    <>
      <MainContainer>
        <QuizContainer>
          <QuestionText>{question.questionText}</QuestionText>
          <ButtonContainer>
            {question.options.map((item, index) => (
              <>
                {question.id === 5 ? (
                  <ImageButton
					key={item}
                    item={item}
                    onSubmitAnswer={() => onSubmitAnswer(question.id, index)}
                  />
                ) : (
                  <AnswerButton
                    key={item}
                    keyID={item}
                    /* pass function to the dispatch to update the state, exessing
                    quiz object: quiz.actions.submitAnwer(), then we need to pass argument to our submit function
                    answerId is a specific answer of a question */
                    onClick={() => onSubmitAnswer(question.id, index)}
                    text={item}
                  />
                )}
              </>
            ))}
          </ButtonContainer>
          <ProgressAnswerContainer>
            {/* Here we display witch question we are at and how many we have left */}
            <ProgressBarContainer>
              <ProgressText>
                {" "}
                Question: {question.id} ({questionsCount} question left)
              </ProgressText>
              {/* The progress bar */}
              <ProgressBar
                completed={completed}
                width={250}
                customLabel={question.id}
                bgColor={"Gray"}
              />
            </ProgressBarContainer>

            {answer && <AnswerText>{showAnswer()}</AnswerText>}
          </ProgressAnswerContainer>
        </QuizContainer>
      </MainContainer>
    </>
  );
};
