import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';

// Vår första

// export const StartPage = () => {
// //   const dispatch = useDispatch();
// //   const quizStarted = useSelector((state) => state.quiz.start)
//   const startBtn = () => {
//     return <CurrentQuestion />
//   }

//   return (
//     <div><h1>Hello</h1>
//       <button type="button" onClick={startBtn}>Start</button>
//     </div>
//   )
// }

// Den här under funkar

export const StartPage = () => {
  const dispatch = useDispatch()
  const start = useSelector((state) => state.quiz.quizStarted);
  /*   const [startQuiz, setStartQuiz] = useState(false)
  setStartQuiz(true)
  const handleStartQuiz = () => {

  }
*/

  return (
    <div>
      {!start ? <button type="button" onClick={() => dispatch(quiz.actions.startQuiz())}>Start</button>
        : <CurrentQuestion />}
    </div>
  )
}

// export const StartPage = () => {
//   return <container><Link to="/CurrentQuestion" /></container>
// }