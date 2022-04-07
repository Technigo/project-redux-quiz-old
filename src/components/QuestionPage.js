import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import "./QuestionPage.css";
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
  background: ${(props) => props.background};

  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
  &:active {
    background: ${(props) => props.background};
}
`;


//background-color: #E76158;

const Counter = styled.span`
   background: ${props => props.background};
   width: 200px;
	height: 50px;
	border-radius: 10px;
	border: solid 3px black;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	font-weight: 700;
	animation: ${props => props.animation} 2s ease ;
`



const QuestionPage = () => {
  const dispatch = useDispatch();

	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	)
	const answer = useSelector((state) =>
		state.quiz.answers.filter((a) => a.questionId === question.id)
	)
	
	const currentQuestionIndex = useSelector(
		(state) => state.quiz.currentQuestionIndex
		)
		
		const score = useSelector((state) => state.quiz.score)
		
		const answerArray = useSelector((state) => state.quiz.answers)
		
		console.log(answerArray)


	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
       // displayNextQuestion();
		setTimeout(displayNextQuestion, 1000)
		
	}
	const displayNextQuestion = () => {
		dispatch(quiz.actions.goToNextQuestion())
	}

	const scoreCounterBackground = () => {
		
		if (answerArray.length === currentQuestionIndex) {
            return '#E76158'
		}
			else {
				if(answerArray[currentQuestionIndex].isCorrect) {
					return 'red'
				}
				else {
					return 'blue'
		
				}

			}
		

	} 


	const scoreAnimation= () => {
		
		if (answerArray.length === currentQuestionIndex) {
            return ''
		}
			else {
				if(answerArray[currentQuestionIndex].isCorrect) {
					return keyframes`
					   0% {
						   background: red;
					   }

					   25% {
						   background: orange;
					   }

					   50% {
						   background: blue;
					   }
					   100% {
						   background: yellow;
					   }
					`
				}
				else {
					return ''
		
				}

			}
		

	} 

	console.log(answerArray[currentQuestionIndex]?.isCorrect)




	//<span className="score-container"> ⭐️ Score: {score}</span>
	
	return (
		<>
			<h1>Guess Whose Butt</h1>
            <Counter animation={scoreAnimation()} background={scoreCounterBackground()}>⭐️ {score}</Counter>
			{/* ADD PROGRESS BAR */}
			<p>Question {question.id} /6</p>

			{/* Or use {currentQuestionIndex + 1} */}
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

