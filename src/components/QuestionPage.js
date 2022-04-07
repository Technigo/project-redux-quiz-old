import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import "./QuestionPage.css";
import styled, { keyframes } from "styled-components";

const zoomInZoomOut = keyframes`
0% {
  transform: scale(1);
}

30% {
  transform: scale(1.35);
}
45% {
  transform: scale(1.35) rotate(5deg);
}
60% {
  transform: scale(1.35) rotate(-5deg);
}
70% {
  transform: scale(1.35) rotate(2deg);
}
80% {
  transform: scale(1.35) rotate(-5deg);
}
95% {
  transform: scale(1.35) rotate(-2deg);
}
100% {
  transform: scale(1);
}
`

const AnswerSubmitBtn = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  border: solid ${(props) => props.border} 5px;
  animation: ${zoomInZoomOut} ${(props) => props.animationtime} ease;
 
  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
`;

const Counter = styled.span`
   background: ${props => props.background};
   width: 200px;
    height: 50px;
    border-radius: 10px;
    border: solid 3px black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    animation: ${props => props.animation} 2s ease ;
`




const QuestionPage = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  console.log("question", question);
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  console.log("answer", answer);
  const score = useSelector((state) => state.quiz.score)
  const answerArray = useSelector((state) => state.quiz.answers);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  console.log(answerArray);

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setTimeout(displayNextQuestion, 5000);
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

  const correctAnswerAnimation = (correctIndex) =>{
    if (!answer) {
      return '0';
    } else {
      if (question.correctAnswerIndex === correctIndex) {
        return '5s';
      }
      return '0';
    }
  }

  const scoreCounterBackground = () => {
    if (answerArray.length === currentQuestionIndex) {
        return '#E76158'
    }
        else {
            if(answerArray[currentQuestionIndex].isCorrect) {
                return 'red'
            }
            else {
                return 'blue'
            }
        }
}
const scoreAnimation= () => {
    if (answerArray.length === currentQuestionIndex) {
        return ''
    }
        else {
            if(answerArray[currentQuestionIndex].isCorrect) {
                return keyframes`
                   0% {
                       background: red;
                   }
                   25% {
                       background: orange;
                   }
                   50% {
                       background: blue;
                   }
                   100% {
                       background: yellow;
                   }
                `
            }
            else {
                return ''
            }
        }
}

  return (
    <>
    <h1>Guess Whose Butt</h1>
    <Counter animation={scoreAnimation()} background={scoreCounterBackground()}>⭐️ {score}</Counter>
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
            <AnswerSubmitBtn
              disabled={answer}
              type="submit"
              onClick={() => onAnswerSubmit(question.id, index)}
              key={item}
              border={changeColorBtn(index)}
              animationtime={correctAnswerAnimation(index)}
            >
              {item}
            </AnswerSubmitBtn>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default QuestionPage;
