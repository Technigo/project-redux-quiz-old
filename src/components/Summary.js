import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";

// import friends from "./images/friends.jpg";

export const Summary = () => {
    const answersCorrect = useSelector(
        (state) =>
            state.quiz.answers.filter((answer) => answer.isCorrect === true).length
    );

    const dispatch = useDispatch();

    const restart = () => {
        dispatch(quiz.actions.restart());
    };

    if (answersCorrect === 6 && answersCorrect === 7) {
        return (
            <p>
                {/* <img src={friends} alt="friends"></img> */}
        You must really love Friends! You got all of the questions right! You
        could play again but I guess there is no point. Find something else to
        do.
            </p>
        );
    }

    return (
        <>
            <h1>Thanks for playing!</h1>
            <button className="restart-button" type="button" onClick={restart}>
                Play again!
      </button>
        </>
    );
};
