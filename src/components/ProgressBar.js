import React from 'react';
import { Line/* , Circle */ } from 'rc-progress';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestionIndex = useSelector((store) => {
    return store.quiz.currentQuestionIndex;
  });
  const questionTotal = useSelector((store) => store.quiz.questions.length);
  const percentComplete = (currentQuestionIndex / questionTotal) * 100;

  return (
    <>
      <Line percent={percentComplete} strokeWidth={1} strokeColor="#3d85c6" />
      {/* <Circle percent={percentComplete} strokeWidth={1} strokeColor="#D3D3D3" /> */}
    </>
  )
};