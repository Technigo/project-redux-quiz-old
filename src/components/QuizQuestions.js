import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "reducers/quiz"

import { 
  ProgressBar, 
  ButtonWrapper,
  BackgroundDiv, 
  FlexQuestionDiv, 
  QuestionAlternatives, 
  QuestionButtons, 
  QuestionHeading 
} from "styles"

export const QuizQuestions = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [isCorrect, setIsCorrect] = useState(false);
  // const [isWrong, setIsWrong] = useState(false);
  const dispatch = useDispatch();
  // getting data from the store
  // useSelector is like binding a state, this will be binded and in the second dispath and only the index will change..
  // so it got another qustion from the store. 
  // every useSelector is listening to changes in the store, we don't need to say we have the data, this variable should..
  // listen to the data. it is all automatically handled 
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  // console logged the whole store, easier and better to use a more specific route you want to access in the store
  // const store = useSelector((state) => state)
  // getting data to the store / updating

  const answers = useSelector((state) => state.quiz.answers)
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  console.log(answers)
  console.log(currentQuestionIndex)
  
 
  // const checkAnswer = () => {
  //   if (answers[currentQuestionIndex]) {
  //     if (answers[currentQuestionIndex].isCorrect) {  
  //       console.log(answers[currentQuestionIndex].isCorrect) 
  //       return true
  //       // return <StyledProgressBar>right={checkAnswer()} wrong={checkAnswer()}></StyledProgressBar>
  //     } else {
  //       return false
  //       // return <StyledButton2 right={checkAnswer()} wrong={checkAnswer()}></StyledButton2>
  //     }
  //   }
  //   else {
  //    return null;
  //   }
  
  
  
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    setIsClicked(true)
    //proceed on with conditional rendering, so check if ... only then dispatch to next question
    // if(question.correctAnswerIndex === index) {
    //   setIsCorrect(true)
    //   setIsWrong(false)
    // } else {
    //   setIsWrong(true)
    //   setIsCorrect(false)
    // }
  }

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsClicked(false)
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <BackgroundDiv>
      <FlexQuestionDiv>
        <QuestionHeading>Question:</QuestionHeading> 
        <h2>{question.questionText}</h2>
        <QuestionAlternatives>
        {question.options.map((item, index) => (
          <QuestionButtons
            key={item}
            disabled={isClicked}
            onClick={() => { onAnswerSubmit(question.id, index) }}
          >{item}
          </QuestionButtons>
        ))}
        </QuestionAlternatives>
      {question.id === 5
        ? <button onClick={handleNextQuestion}>Submit Quiz</button>
        : <button onClick={handleNextQuestion}>Next question</button>
      }
      <ButtonWrapper>
          <ProgressBar right={answers[0]?.isCorrect} wrong={answers[0]?.isCorrect === false}></ProgressBar>
          <ProgressBar right={answers[1]?.isCorrect} wrong={answers[1]?.isCorrect === false}></ProgressBar>
          <ProgressBar right={answers[2]?.isCorrect} wrong={answers[2]?.isCorrect === false}></ProgressBar>
          <ProgressBar right={answers[3]?.isCorrect} wrong={answers[3]?.isCorrect === false}></ProgressBar>
          <ProgressBar right={answers[4]?.isCorrect} wrong={answers[4]?.isCorrect === false}></ProgressBar>
      </ButtonWrapper>
      </FlexQuestionDiv>
    </BackgroundDiv>
  )
}
