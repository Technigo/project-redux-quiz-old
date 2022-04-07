import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz"
import { NextButton, SummaryDiv, QADiv } from "components_styled/StyledElements";

const Summary = ({setQuizDone}) => {
  const dispatch = useDispatch();
  const answers = useSelector((store) => store.quiz.answers);
  let counter = 0;

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
    setQuizDone(false)
  }

  // console.log(answers);
  return (
    <SummaryDiv>
      <h1>Quiz is done!</h1>
      {answers.map((answer, index) => {
        const correctAnswer =
          answer.question.options[answer.question.correctAnswerIndex];
        if (correctAnswer === answer.answer) {
          counter++
        }

        return (
          <QADiv key={answer.questionId}>
            <span className="text-align-center">Question {index+1}:</span>
            <h2><br />{answer.question.questionText}</h2>
            {/* <h1>{answer.question.questionText}</h1> */}
            <p>You answered {answer.answer} which was {answer.isCorrect ? "correct!" : "sadly incorrect."}</p>
            {/* <h2>You were {answer.isCorrect ? 'right!' : 'wrong HAHA.'}</h2> */}
            {!answer.isCorrect && <p>The correct answer was {correctAnswer}</p>}
            
          </QADiv>
        );
      })}
      <QADiv>
        <p>You got {counter} / 5 correct!</p>
        {counter > 4 
          ? <p>WOOOOOOHOOOOO!</p>
          : counter > 2 
            ? <p>Not bad!</p>
            : <p>Better luck next time!</p>
        }
      </QADiv>
      <NextButton onClick={restartQuiz}>RESTART QUIZ!</NextButton>  
    </SummaryDiv>
  );
};

export default Summary;
