import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import Summary from 'components/Summary'


//Variable for the answer
export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch();

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  if(quizOver) {
    return <Summary />
  }

 

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.id} / 5
      {question.options.map((item, index) => {
       
      return <>
      <button className=""type="submit" onClick={()=>onAnswerSubmit(question.id, index)} key={item}>{item}</button>
        

      </>
})}
<button type="submit" onClick={()=>nextQuestion ()}>Next question</button>
</div>
  
  )
}
