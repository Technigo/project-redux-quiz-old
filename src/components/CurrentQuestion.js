import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import Summary from 'components/Summary';
import { Footer } from 'components/Footer'
import { AnswerButton, NextQuestion } from './Button';


//Variable for the answer
export const CurrentQuestion = () => {
  const [disabled, setDisabled] = useState(false);

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const userAnswer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  if (quizOver) {
    return <Summary />;
  }

  return (
    <main>
    <div className='question'>
      <h1>{question.questionText}</h1>
      <div className='options'>
        {question.options.map((item, index) => (
          <AnswerButton
            key={item}
            item={item}
            index={index}
            questionId={question.id}
            question={question}
            answer={userAnswer}
            setDisabled={setDisabled}
            disabled={disabled}
          />
        ))}
      </div>
      <NextQuestion setDisabled={setDisabled} />
      <p className="question-number"> Question {question.id} / {numberOfQuestions}</p>
    </div>
    <Footer />
    </main>
  );
};
