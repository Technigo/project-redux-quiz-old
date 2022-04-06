import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled, { keyframes } from 'styled-components'


const AnswerSubmitBtn = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  border: solid #000 3px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  &:active {
    background: ${(props) => props.background};
  }

`;



const QuestionPage = () => {
	const dispatch = useDispatch()
	const text =''

	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	)
	const answer = useSelector((state) =>
		state.quiz.answers.filter((a) => a.questionId === question.id)
	)

  
	//const color = useSelector((state) => state.quiz.color)
	let color = '';
	const answerArray = useSelector((state) => state.quiz.answers)
    const animation = useSelector((state) => state.quiz.animation)
	console.log(answerArray, 'selected Answer array')
    //const rightAnswer = answerArray.map(item => iteminitem.isCorrect);

	//console.log(rightAnswer)
  

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
        displayNextQuestion();
       color = answerArray[0]?.isCorrect;
	   console.log(color)
	//	setTimeout(displayNextQuestion, 2000)
	}
	const displayNextQuestion = () => {
		dispatch(quiz.actions.goToNextQuestion())
	}

	//Check the answer state - correct or incorrect

	return (
		<>
			<h1>Guess Whose Butt</h1>
		<section className='question-section'>
			<div className='question-container'>
				<img
					className='question-img'
					src={question.img}
					alt={question.img_alt}
				/>
				<div className='answer-btn-container'>
			        <p>{color}</p>
					{question.options.map((item, index) => (
						
				  		<button
						  type='submit'
						  onClick={() => onAnswerSubmit(question.id, index)}
						  key={item}
						  className={color}
					  >
						  {item}
		  </button>
          
					))}
				</div>
			</div>
		</section>
		</>
	)
}

export default QuestionPage

