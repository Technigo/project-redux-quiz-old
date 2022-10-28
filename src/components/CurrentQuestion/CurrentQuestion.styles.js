/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;

    button:focus {
        background-color: #42a2db;
    }

    .correctBtn {
    }

    .wrongBtn {
    }

    #noSymbol {
        opacity: 0
    }
  
`

export const AnswerButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;

}
`