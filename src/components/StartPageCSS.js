import styled from 'styled-components'

export const Start = styled.div`
display: flex;
flex-direction: column;
text-align: center;
border: solid 8px #BDE0FE;
height: 200px;
width: 200px;
position: absolute;
`

export const StartButton = styled.button`
padding: 10px;
color: white;
background-color: black;
border-radius: 10px;
margin-top: 5px;
font-size: 12px;
font-weight: 500;
width: 100px;
`
export const OuterWrapperStartPage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  border: 1px solid red;
`

export const InnerWrapperStartPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: transparent;
width: 60%;
height: 100vh;
align-items: center;
margin: 0 auto;`