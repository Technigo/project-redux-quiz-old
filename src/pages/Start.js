import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as MyBackground } from '../assets/retro_bg.svg'

const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BackgroundStyled = styled.div`
    height: 100vh;
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
        min-width: 100vw;
    }
`
const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 200px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    @media (min-width: 768px) {
        max-width: 600px;
        height: 450px;
    }
`

const StyledHeadline = styled.h1`
    font-family: 'Righteous';
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        font-size: 50px;
    }
`
const ButtonStart = styled.button`
    font-family: 'Righteous';
    border: none;
    font-size: 17px;
    padding: 20px;
    background-color: #FFC543;
    border-radius: 50px;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: 30px;
    }
`
const StyledLink = styled(Link)`
    text-decoration:none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Start = () => {
    return (
        <MainWrapper>
            <BackgroundStyled>
                <MyBackground />
            </BackgroundStyled>
            <StartContainer>
                <StyledHeadline>Quiz about tech</StyledHeadline>
                <StyledLink to="/questions">
                    <ButtonStart type="button">Start</ButtonStart>
                </StyledLink>
            </StartContainer>

        </MainWrapper>
    )
}

export default Start