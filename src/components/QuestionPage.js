import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled, { keyframes } from "styled-components";
import "./QuestionPage.css";
import Button from "./Button";

// const zoomInZoomOut = keyframes`
// 0% {
//   transform: scale(1, 1);
// }
// 50% {
//   transform: scale(1.1, 1.1);
// }
// 100% {
//   transform: scale(1, 1);
// }
// `



const Counter = styled.span`
   background: #000;
   width: 200px;
    height: 50px;
    border-radius: 10px;
    color: #fef8d8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    animation: ${props => props.animation} 2s ease-in-out ;
`




const QuestionPage = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const score = useSelector((state) => state.quiz.score)
  const answerArray = useSelector((state) => state.quiz.answers);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  console.log(answerArray);

  const onAnswerSubmit = (id, index) => {
    
    
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setTimeout(displayNextQuestion, 1500);
    
  };
  
  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    
  };
  

  //Check the answer state - correct or incorrect
  const changeColorBtn = (indexOption) => {
    if (!answer) {
      return "#000";
    } else {
      if (question.correctAnswerIndex === indexOption) {
        return "#66FF00";
      }
      return "red";
    }
  };


const scoreAnimation= () => {
    if (answerArray.length === currentQuestionIndex) {
        return ''
    }
        else {
            if(answerArray[currentQuestionIndex].isCorrect) {
                return keyframes`
     
                   25% {
                       font-size: 40px;
                       background:#01785D ;
                      }
                      
                      
                      50% {
                       background: black;
                       font-size: 20px;

                   }
                `
            }
            else {
                return keyframes `
                25% {
                  font-size: 40px;
                  background:#E76158 ;
                }
                60% {
                  background: black;
                  font-size: 20px;
                `
            }
        }
}

  return (
    <>
    <h1>Guess Whose Butt</h1>
    <Counter animation={scoreAnimation()}>⭐️ {score} </Counter>
            {/* ADD PROGRESS BAR */}
            <p>Question {question.id} /6</p>
            {/* Or use {currentQuestionIndex + 1} */}
            {/* *************** */}
    <section className="question-section">
      <div className="question-container">
        <div className="question-img-container">
          <img
            className="question-img"
            src={question.img}
            alt={question.img_alt}
          />
        </div>
        <div className="answer-btn-container">
          {question.options.map((item, index) => (
            <Button
              disabled={answer}
              type="submit"
              onClick={() => onAnswerSubmit(question.id, index)}
              key={item}
              border={changeColorBtn(index)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default QuestionPage;
