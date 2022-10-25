import React from 'react'
import { Button } from 'components/Buttons'
// import { useDispatch, useSelector } from 'react-redux'
// import { quiz } from 'reducers/quiz'

const Summary = () => {
  // const dispatch = useDispatch()
  // const wholeQuestion = useSelector((store) => store)
  // const onRestart = () => {
  //   dispatch(store.quiz.actions.restart());
  // }

  return (
    <div>
      <h1>Summary</h1>
      <Button buttonText="restart" />
    </div>
  )
}

export default Summary;