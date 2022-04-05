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

	const question = useSelector(
		(state) => state.quiz.questions[state.quiz.currentQuestionIndex]
	)
	const answer = useSelector((state) =>
		state.quiz.answers.find((a) => a.questionId === question.id)
	)

  
	//const color = useSelector((state) => state.quiz.color)
  let color = '';
	const answerArray = useSelector((state) => state.quiz.answers)

	console.log(answerArray)

  for (let i = 0; i < answerArray.length; i++) {

    if (answerArray[i].isCorrect === true) {
      color = 'green'
      console.log('i am true', color)
    } else {
      color = 'red'
      console.log('i am false', color)
    }
  }

  

	const onAnswerSubmit = (id, index) => {
		dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
     displayNextQuestion();
		//setTimeout(displayNextQuestion, 2000)
	}
	const displayNextQuestion = () => {
		dispatch(quiz.actions.goToNextQuestion())
	}

	//Check the answer state - correct or incorrect

	return (
		<section className='question-section'>
			<h1>Guess Whose Butt</h1>
			<div className='question-container'>
				<img
					className='question-img'
					src={question.img}
					alt={question.img_alt}
				/>
				<div className='answer-btn-container'>
					{question.options.map((item, index) => (
						<AnswerSubmitBtn
							type='submit'
							onClick={() => onAnswerSubmit(question.id, index)}
							key={item}
             				background= 'red'
						>
							{item}
            </AnswerSubmitBtn>
          
					))}
				</div>
			</div>
		</section>
	)
}

export default QuestionPage
