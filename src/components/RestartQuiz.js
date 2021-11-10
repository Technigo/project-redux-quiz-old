import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ButtonStart = styled.button`
    font-family: 'Righteous';
    border: none;
    font-size: 17px;
    padding: 20px;
    background-color: #FFB6BB;
    border-radius: 50px;
    cursor: pointer;
    margin: 20px;
`

const StyledLink = styled(Link)`
    text-decoration:none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RestartQuiz = () => {

    const dispatch = useDispatch()
    const onRestartClick = () => {
        dispatch(quiz.actions.restart())
    }

    return (
        <StyledLink to='/'>
            <ButtonStart onClick={onRestartClick}>Restart the quiz</ButtonStart>
        </StyledLink>
    )
}

export default RestartQuiz