/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import './accordion.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import { AnswerImg, AnswerText, Container, ContainerRow } from './SummaryPageStyling';

export const AccordionComponent = () => {
  const answers = useSelector((store) => store.quiz.answers)
  const wrongAnswers = answers.filter((answer) => answer.isCorrect === false)
  console.log(wrongAnswers)
  const countOfWrongAnswers = wrongAnswers.length
  console.log(countOfWrongAnswers)
  return (
    <Accordion allowZeroExpanded>
      {wrongAnswers.map(((wrongAnswer) => {
        return (
          <AccordionItem key={`wrongAnswer-${wrongAnswer.questionId}`}>
            <AccordionItemHeading>
              <AccordionItemButton>{wrongAnswer.question.questionText}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Container>
                <ContainerRow>
                  <AnswerText wrong>Your answer: </AnswerText>
                  {wrongAnswer.answer.includes('.png')
                    ? <AnswerImg src={wrongAnswer.answer} alt="option" />
                    : <AnswerText wrong> {wrongAnswer.answer} </AnswerText>}
                </ContainerRow>
                <ContainerRow>
                  <AnswerText>Correct answer: </AnswerText>
                  {
                    wrongAnswer.question.options[wrongAnswer.question.correctAnswerIndex].includes('.png')
                      ? <AnswerImg src={wrongAnswer.question.options[wrongAnswer.question.correctAnswerIndex]} alt="option" /> : <AnswerText> {wrongAnswer.question.options[wrongAnswer.question.correctAnswerIndex]}</AnswerText>
                  }
                </ContainerRow>
              </Container>
            </AccordionItemPanel>
          </AccordionItem>
        )
      }))}
    </Accordion>
  )
}