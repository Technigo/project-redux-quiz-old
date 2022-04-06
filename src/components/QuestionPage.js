import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: #c3471b;
  font-size: 68px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #000;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 795px) {
    font-size: 100px;
  }
`;

const QuestionSection = styled.section`
width: 80%;
max-width: 1000px;
height: 80%;
background-color: rgba(1, 120, 93, 0.9);
border: #000 solid 3px;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 1.5em;

@media screen and (min-width: 700px) {
	  max-width: 700px;
`;

const QuestionImgContainer = styled.div`
  padding: 8px 20px;
  /* max-width: 500px; */
  height: 200px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 700px) {
    height: 250px;
  }
`;

const QuestionImg = styled.img`
  margin: 1em;
  object-fit: cover;
  border: #fef8d8 solid 5px;
  border-radius: 15px;
`;

const AnswerBtnContainer = styled.div`
  display: grid;
  justify-items: center;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
`;

const AnswerSubmitBtn = styled.button`
  align-self: center;
  background: #fef8d8;
  color: #000;
  font-family: "Concert One", cursive;
  border: solid #000 3px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 10em;
  margin-bottom: 1em;
  &:hover {
    background-color: #45413c;
    color: #fef8d8;
  }
  &:active {
    background: ${(props) => props.background};
  }
`;

const QuestionPage = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );
  //const color = useSelector((state) => state.quiz.color)
  let color = "";
  const answerArray = useSelector((state) => state.quiz.answers);
  const animation = useSelector((state) => state.quiz.animation);
  console.log(answerArray, "selected Answer array");
  //const rightAnswer = answerArray.map(item => iteminitem.isCorrect);
  //console.log(rightAnswer)
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    displayNextQuestion();
    //setTimeout(displayNextQuestion, 2000)
  };
  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };
  //Check the answer state - correct or incorrect
  return (
    <>
      <Title>Guess Whose Butt</Title>
      <QuestionSection>
        <div className="question-container">
          <QuestionImgContainer>
            <QuestionImg src={question.img} alt={question.img_alt} />
          </QuestionImgContainer>
          <AnswerBtnContainer>
            {question.options.map((item, index) => (
              <AnswerSubmitBtn
                type="submit"
                onClick={() => onAnswerSubmit(question.id, index)}
                key={item}
                className={color}
              >
                {item}
              </AnswerSubmitBtn>
            ))}
          </AnswerBtnContainer>
        </div>
      </QuestionSection>
    </>
  );
};
export default QuestionPage;
