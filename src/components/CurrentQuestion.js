import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Summary } from "./Summary";
import { ProgBar } from "./ProgressBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Main = styled.section`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  min-width: 800px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Question = styled.h1`
  width: 700px;
  font-size: 25px;
  text-align: center;
`;

const Button = styled.button`
  font-family: poppins;
  background-color: white;
  border-radius: 10px;
  font-size: 17px;
  padding: 10px;
  border: ${prop => prop.border};
  margin: 10px;
  width: 70%;

  &:hover {
    background-color: gray;
  }

    `;

export const CurrentQuestion = (option, index, userAnswer) => {
  // Getting data from the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const store = useSelector((state) => state);
  // const currentQ = useSelector((state) => state.quiz.currentQuestionIndex);
  const answersArray = useSelector((state) => state.quiz.answers);
  console.log(store);

  const dispatch = useDispatch();
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (!question) {
    return <div>Oh no! I could not find the current question!</div>;
  }

  //FROM TOWNHALL

//   const changeBorderColor = (indexOption) => {
//     if (answersArray.length === currentQuestionIndex)
//     return 'none'
//    else {
//     if (question.correctAnswerIndex === indexOption ) 
//     return 'green'
//    else 
//     return 'red'
//   } 
// }
 
  return (
    <Wrapper>
      <Main>
        <Header />

        {quizOver ? (
          <Summary />
        ) : (
          <QuestionContainer>
            <Question>Question: {question.questionText}</Question>
            {question.options.map((item, index) => (
              <Button
                onClick={() => onAnswerSubmit(question.id, index)}
                key={item}
                // Put changeBorderColor here
                
              >
                {item}
              </Button>
            ))}
            {/* {checkAnswer()} */}
          </QuestionContainer>
        )}
        
        <ProgBar />
        <Footer />
      </Main>
    </Wrapper>
  );
};
