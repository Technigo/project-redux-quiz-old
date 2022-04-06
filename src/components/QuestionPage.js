import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled, { keyframes } from "styled-components";
const AnswerSubmitBtn = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border: solid #000 3px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
  &:active {
    background: ${(props) => props.background};
  }
`;


const QuestionPage = () => {
	const dispatch = useDispatch()

	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	)
	const answer = useSelector((state) =>
		state.quiz.answers.filter((a) => a.questionId === question.id)
	)

  
	//const color = useSelector((state) => state.quiz.color)
	const answerArray = useSelector((state) => state.quiz.answers)
	console.log(answerArray, 'selected Answer array')
	console.log(question.id, ' question array')

  

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
        displayNextQuestion();
   
		setTimeout(displayNextQuestion, 5000)
	}
	const displayNextQuestion = () => {
		dispatch(quiz.actions.goToNextQuestion())
	}

	const count = () => {

		if (answerArray[question.id - 1]?.isCorrect) {

			return 'true'
		} return 'false'
	}


	return (
		<>
			<h1>Guess Whose Butt</h1>

				<p>{count()} Hi</p>

			{/* ADD PROGRESS BAR */}
			<p>Question {question.id} /6</p>
			{/* *************** */}

		<section className='question-section'>
			<div className='question-container'>
				<img
					className='question-img'
					src={question.img}
					alt={question.img_alt}
				/>
				<div className='answer-btn-container'>
					{question.options.map((item, index) => (
						
				  		<button
						  type='submit'
						  onClick={() => onAnswerSubmit(question.id, index)}
						  key={item}
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

