import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 100px;
  margin-bottom: 61px;
`
export const QuestionContainer = styled.section`
  margin: 0 0 15px 0;
  padding: 25px 0;
  border-top: 4px dashed #19e619;
  border-bottom: 4px dashed #19e619;
  `

export const QuestionText = styled.text`
  margin: 0;
  padding: 0;
  font-size: 35px;
  font-weight: 700;
`

export const ButtonStyled = styled.button`
  margin: 34px 26px 50px 0;
  padding: 8px;
  font-family: 'VT323', "Courier New", monospace;
  font-size: 25px;
  color: #19e619;
  border: 1px ridge #19e619;
  background: #191414;
  &::hover & {
    border: 2px inset #19e619; 
  }
  
`
export const Progress = styled.div`
  margin-top: 5px;
`