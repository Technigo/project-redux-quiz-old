import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    font-size: 20px;
`
const Progress = styled.div`
    height: 15px;
    border-radius: 50px;
    width: 80%;
    background-color: #FEE8DA;
`
const ProgressBarStyled = styled.div`
    background-color: #0BFFBE;
    height: 100%;
    border-radius: 50px;
`

const ProgressBar = () => {

    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    return (
        <ProgressContainer>
                <Progress>
                    <ProgressBarStyled style={{ width: `${(currentQuestionIndex + 1) * 20}%` }}>
                    </ProgressBarStyled>
                </Progress>
        </ProgressContainer >
    )
}


export default ProgressBar