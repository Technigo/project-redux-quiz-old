import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {quiz} from 'reducers/quiz'



const QuestionPage = () => {
    const dispatch = useDispatch();

    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    
    
    const onAnswerSubmit = (id, index) => {

        dispatch(quiz.actions.submitAnswer({questionId: id, answerIndex: index}))
        
        const displayNextQuestion = () => {
            
            dispatch(quiz.actions.goToNextQuestion())
        }


        setTimeout(displayNextQuestion, 2000);

        
        //Check the answer state - correct or incorrect
    }
  

     return  (   
     <section className='question-section'>
      <h1>Guess Whose Butt</h1>
      <div className='question-container'>
        <img className='question-img' src={question.img} alt={question.img_atl}/>
        <div className='answer-btn-container'>
            {question.options.map((item, index) => (
                <button type='submit' onClick={() => onAnswerSubmit(question.id, index)} key={item}> {item} </button> 
            ))}
        </div>
      </div>
    </section>)
}

export default QuestionPage