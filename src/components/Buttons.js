
import styled from 'styled-components'
// import { quiz } from 'reducers/quiz'

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
/* background-color: pink; */

`
export const Button = styled.button`
border: 2px solid black;
padding: 5px;
width: ${(props) => (props.submit ? '5%' : '40%')};

`
export const NextQuestionBtn = styled.button`
border: 2px solid green;
padding: 20px;
background-color: yellow;

`
export default ButtonContainer

