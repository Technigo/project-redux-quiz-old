import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "../reducers/quiz";

//Background-image: https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answers = useSelector((state) => state.quiz.answers);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  console.log(answers);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onSubmitAnswer = (index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    );
    console.log("click");
  };

  // efter ett val så får man reda på om det var rätt/fel samt att knapparna blir disabled + det kommer en "next question" knapp

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={answers.length === question.id}
          className={
            answers[currentQuestionIndex]?.isCorrect &&
            answers[currentQuestionIndex]?.answerIndex === index
              ? "button correct"
              : answers.length !== question.id
              ? "button"
              : "button incorrect"
          }
          onClick={() => onSubmitAnswer(index)}
        >
          {option}
        </button>
      ))}
      {answers.length === question.id && !quizOver && (
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          {answers.length + 1 === question.length
            ? "Show results"
            : "Next Question"}
        </button>
      )}
      {/* {quizOver && (
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Show results
        </button>
      )} */}
    </div>
  );
};
// button:focus{background-color:red;}
// export const Square = ({ value, index }) => {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(game.actions.captureSquare({ index }));
//   };

//   return (
//     <button
//       className={value === null ? "square clickable" : "square"}
//       type="button"
//       onClick={handleClick}
//     >
//       <Player value={value} />
//     </button>
//   );
// };

// import { createSlice } from '@reduxjs/toolkit'
// import { calculateWinner } from 'utils/calculateWinner'

// const newGame = {
//   squares: [
//     null, null, null,
//     null, null, null,
//     null, null, null
//   ],
//   winner: null,
//   player: 'x'
// }

// export const game = createSlice({
//   name: 'game',
//   initialState: newGame,
//   reducers: {
//     captureSquare: (state, action) => {
//       const { index } = action.payload

//       // If the square is 'uncaptured', capture it
//       if (state.squares[index] === null) {
//         state.squares[index] = state.player
//       }

//       // Change the player to the next player
//       if (state.player === 'x') {
//         state.player = 'o'
//       } else {
//         state.player = 'x'
//       }

//       // If a winner hasn't already been declared, then check
//       // who the winner is
//       if (!state.winner) {
//         state.winner = calculateWinner(state.squares)
//       }
//     },
//     restart: () => {
//       return newGame
//     }
//   }
// })

// import React from "react";
// import { useSelector } from "react-redux";
// import { Square } from "components/Square";

// export const Board = () => {
//   const squares = useSelector((store) => store.game.squares);

//   return (
//     <div className="board">
//       {squares.map((value, index) => (
//         <Square key={index} value={value} index={index} />
//       ))}
//     </div>
//   );
// };
