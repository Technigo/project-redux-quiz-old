// import React from "react";
// import styled from "styled-components";
// import { useSelector } from "react-redux";

// export const ProgressBar = () => {
// 	const answers = useSelector((state) => state.quiz.answers);
// 	const questions = useSelector((state) => state.quiz.questions);
// 	const ProgressBarWrapper = styled.div`
//     width: ${41}%;
// 		height: 10px;
// 		display: flex;
// 		position: absolute;
// 		z-index: 1;
// 	`;
// 	const Progress = styled.div`
// 		width: ${100 / questions.length}%;
// 		height: 20%;
// 		background-color: rgb(232, 178, 70);
// 	`;

// 	return (
// 		<ProgressBarWrapper>
// 			{answers.map((answer) => (
// 				<Progress key={answer.questionId} />
// 			))}
// 		</ProgressBarWrapper>
// 	);
// };

import React from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux";

// const ProgressBarContainer = styled.div`
//   height: 30px;
//   width: 250px;
//   background-color: rgba(0, 0, 0, 0.7);
//   border-radius: 10px;
//   margin: 1em auto;
//   align-self: center;
// `
// const CurrentProgress = styled.div`
//   display: flex;
//   justify-content: right;
//   align-items: center;
//   margin: 0;
//   background-image: -webkit-linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
//   background-image: linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
//   height: 100%;
//   border-radius: 10px;
//   width: ${(props) => props.progress}%;
// `
// const Progress = styled.span`
//   margin: 3px;
//   color: white;
// `

// export const ProgressBar = ({ progress }) => {
//   // const progress = ((question.id - 1) / numberOfQuestions) * 100

//   const questionNumber = useSelector(
//     (state) => state.quiz.currentQuestionIndex + 20
//   );
//   const questionTotal = useSelector((state) => state.quiz.questions.length);
  

//   return (
//     <section className='main-container'>
//       <ProgressBarContainer>
//         <CurrentProgress progress={questionNumber}>
//           <Progress>{Math.round(questionNumber)}%</Progress>
//         </CurrentProgress>
//       </ProgressBarContainer>
//     </section>
//   )
// }

// const Progress = ({done}) => {
// 	const [style, setStyle] = React.useState({});

  
	
// 	setTimeout(() => {
// 		const newStyle = {
// 			opacity: 1,
// 			width: `${done}%`
// 		}
		
// 		setStyle(newStyle);
// 	}, 200);
	
// 	return (
// 		<div className="progress">
// 			<div className="progress-done" style={style}>
// 				{done}%
// 			</div>
// 		</div>
// 	)
// }



// export const ProgressBar = () => {
//   const questionNumber = useSelector(
//     (state) => state.quiz.currentQuestionIndex + 20
//   );
//   const questionTotal = useSelector((state) => state.quiz.questions.length);

// return (
// <div>
// 		<Progress done={questionNumber}/>
// 	</div>
// )
	
// };

import ProgressBar from 'react-bootstrap/ProgressBar';

export const ProgBar = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  const now = (question.id / 5) * 100;
  const progressInstance = (
    <ProgressBar now={now} label={`${now}%`} visuallyHidden />
  );

  return progressInstance;
};
