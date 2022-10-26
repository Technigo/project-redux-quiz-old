/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Summary } from 'pages/Summary';
/* import { Options } from './Options'; */

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const options = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].options
  );

  const answers = useSelector((state) => state.quiz.answers);

  const isCorrect = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]?.isCorrect
  );

  const quizOver = useSelector((state) => state.quiz.quizOver);

  const [answer, setAnswer] = useState(null);
  const [optionIndex, setOptionIndex] = useState(0);
  console.log('question:', question);
  console.log('options:', options);
  console.log('answers:', answers);
  console.log('isCorrect', isCorrect);

  /* if
  (quizOver === true) {
    return <Summary />;
  } */

  if (!question) {
    return <h1>Åh nej! Jag kunde inte hitta den aktuella frågan!</h1>;
  }

  const handleClickButton = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('Rätt svar!')
    } else {
      window.alert('Fel svar!')
    }
  }

  const handleNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <div>
      {quizOver ? (
        <Summary />
      ) : (
        <>
          <div>
            <h2>Fråga {question.id} av 5</h2>
            <h1>{question.questionText}</h1>
            {/* <Options /> */}
            {question.options.map((option, index) => {
              return (
                <form>
                  <input
                    id="answer"
                    type="radio"
                    key=""
                    onChange={(event) => {
                      setAnswer(event.target.value);
                      setOptionIndex(index);
                    }}
                    value={option}
                    checked={answer === option}
                    required />
                  <label htmlFor="answer" key={option}>
                    {` ${option}`}
                  </label>
                </form>
              );
            })}
          </div>
          <button
            onClick={() => handleClickButton(question.id, optionIndex)}
            type="submit"
          >
                OK
          </button>
          <button
            type="button"
            onClick={() => handleNextButton()}
            disabled={!answer}
          > Next
          </button>
        </>)}
    </div>
  );
};
