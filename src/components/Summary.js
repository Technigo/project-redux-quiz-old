/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux';
import RestartButton from './RestartButton';
import { Image } from './ReusableStyles';

const Summary = () => {
  const allAnswers = useSelector((state) => state.quiz.answers)
  const allQuestions = useSelector((state) => state.quiz.questions);
  console.log('all.answers', allAnswers);
  console.log('all.questions', allQuestions);

  const qsNAs = [];
  for (let i = 0; i <= 3; i++) {
    qsNAs.push({ isCorrect: allAnswers[i].isCorrect, answer: allAnswers[i].answer.value, question: allQuestions[i] })
  }
  console.log('Qs & As', qsNAs);
  const results = qsNAs.map((object) => {
    const rightAnswer = object.question.correctAnswerIndex;
    return (
      <QnAWrapper key={object.question.id}>
        <h3>{object.question.questionText}</h3>
        {object.isCorrect
          ? <p style={{ color: 'green' }}>You answered "{object.answer}", correct!</p>
          : <div>
            <p style={{ color: 'red' }}>"{object.answer}" was wrong!</p>
            <p>The correct answer was: "{object.question.options[rightAnswer].value}"</p>
          </div>}
      </QnAWrapper>
    )
  })

  // The four lines below solves the problem of displaying the answer on the last question
  // that includes an image. It's not pretty but it works.
  const imgeAnswerResult = useSelector((state) => state.quiz.answers[4].isCorrect);
  const imageAnswerText = allAnswers[4].answer.value;
  const imageAnswerImage = allAnswers[4].answer.img;
  const imageQuestion = useSelector((state) => state.quiz.questions[4]);
  return (
    <SummaryPage>
      <h1>You rock-et that quiz!!</h1>
      <QuestionsAndAnswers>
        {results}
        <div>
          <h3>{imageQuestion.questionText}</h3>
          {imgeAnswerResult
            ? <>
              <ClonedImage src={imageAnswerImage} alt="sdg" />
              <p style={{ color: 'green' }}>Correct</p>
            </>
            : <>
              <p style={{ color: 'red' }}>Wrong, you chose "{imageAnswerText}"</p>
              <p>This is Mercury 👇</p>
              <ClonedImage src={imageQuestion.options[1].img} alt="Mercury" />
            </>}
        </div>
      </QuestionsAndAnswers>
      <FinalCitate>
        Now go teach your friends your spacetastic knowledge. See you crater, space invader!
      </FinalCitate>
      <RestartButton />
    </SummaryPage>
  )
}
export default Summary;
const FinalCitate = styled.p`
text-align: center;
line-height: 1.2;
margin-bottom: 2rem;
`
const QuestionsAndAnswers = styled.div`
line-height: 1.5;
text-align: center;
margin-top: 3rem;
`
const SummaryPage = styled.div`
text-align: center;
line-height: 3rem;
padding: 2rem;
`
const QnAWrapper = styled.div`
margin-bottom: 2rem;
`
const ClonedImage = styled(Image)`
  width: 8rem;
  margin: 1rem;

`