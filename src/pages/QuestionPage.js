import { CurrentQuestion } from "components/CurrentQuestion";
import React from "react";
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
`
const StyledBackground = styled(MyBackground)`
    height: 100%;
`

const QuestionPage = () => {
    return (
        <MainWrapper>
            <BackgroundStyled>
                <StyledBackground />
            </BackgroundStyled>
            <CurrentQuestion />
        </MainWrapper>
    )
}

export default QuestionPage