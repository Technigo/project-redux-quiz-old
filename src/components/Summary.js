import React from 'react'
import { quiz } from "../reducers/quiz";
import { useSelector } from "react-redux";


export const Summary = () => {

  const answers = useSelector((state) => state.quiz.answers)

  return (
    <div>
      {answers.map((item) => (
        console.log(item)
      ))}
     
    </div>
  );
};
