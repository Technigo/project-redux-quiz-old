import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";


const StyledAnswers = styled.div`
    font-size: 15px;
    padding: 10px;
    font-weight: 600;
    margin: 0;
    @media (min-width: 768px) {
        text-align: center;
    }
`
const StyledAnswer = styled.p`
    margin: 0;
    @media (min-width: 768px) {
        font-size: 20px;
    }
`
const StyledHeadline = styled.h1`
    font-size: 20px;
    padding: 20px 15px 0 15px;
    margin: 0;
    @media (min-width: 768px) {
        text-align: center;
    }
`

const AnswersSummary = () => {
    const answers = useSelector((state) => state.quiz.answers)

    return (
        <>
            <StyledHeadline>Your answers:</StyledHeadline>
            <StyledAnswers>
                {answers.map((answer) => (
                    <StyledAnswer key={answer.questionId}>{answer.questionId}. <span className={answer.answer === answer.question.options[answer.question.correctAnswerIndex] ? 'green' : 'red'}>{answer.answer} </span>

                        {answer.answer !== answer.question.options[answer.question.correctAnswerIndex] && (
                            <span>(correct is {answer.question.options[answer.question.correctAnswerIndex]})</span>
                        )}
                    </StyledAnswer>
                ))}
            </StyledAnswers>
        </>
    )
}

export default AnswersSummary