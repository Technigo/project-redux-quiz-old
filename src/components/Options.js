import React from "react";
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'


const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledButtons = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 5px;
  width: 75%;
  margin: 4px 0;
  border: black 2px solid;
  border-radius: 8px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  /* &:hover {
    background-color: #FFC543;
  } */
`

const Options = () => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    const answers = useSelector((state) => state.quiz.answers)
    const answer = useSelector((state) => state.quiz.answers.find((a) => (a.questionId === question.id // question could come from the previous selector in the last example
    )))
    const answerIndex = answer ? answer.answerIndex : ''
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    const dispatch = useDispatch()

    const setOptionColor = (index) => {
        if (answerIndex === index) {
            return question.correctAnswerIndex === index
                ? "correctAnswer"
                : "wrongAnswer"
        };
        if (answerIndex !== question.correctAnswerIndex) {
            return question.correctAnswerIndex === index
                ? "correctAnswer"
                : "transparent"
        }
    }
    const onAnswerSubmit = (id, index) => {
        dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    }

    return (
        <ButtonContainer>
            {question.options.map((option, index) => (
                <StyledButtons type="button"
                    className={answerIndex === '' ? 'transparent' : setOptionColor(index)}
                    key={option}
                    onClick={() => onAnswerSubmit(question.id, index)}
                    disabled={answers[currentQuestionIndex]}>
                    {option}
                </StyledButtons>
            ))}
        </ButtonContainer>
    )
}

export default Options