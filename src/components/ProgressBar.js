import React from 'react';
import { Line } from 'rc-progress';

import { useSelector } from 'react-redux'

export const ProgressBar = () => {
  // eslint-disable-next-line max-len
  const currentQuestionId = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex].id)
  const totalQuestions = useSelector((store) => store.quiz.questions.length)

  return (
    <Line percent={(currentQuestionId / totalQuestions) * 100} width="80%" trailWidth={4} strokeWidth={4} strokeColor="yellow" />
  )
}
