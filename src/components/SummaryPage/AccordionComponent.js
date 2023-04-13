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
import { AnswerText, ContainerRow } from './SummaryPageStyling';

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
              <ContainerRow>
                <AnswerText wrong><span>Your answer: </span>
                  {wrongAnswer.answer}
                </AnswerText>
                <AnswerText><span>Correct answer: </span>
                  {wrongAnswer.question.options[wrongAnswer.question.correctAnswerIndex
                  ]}
                </AnswerText>
              </ContainerRow>
            </AccordionItemPanel>
          </AccordionItem>
        )
      }))}
    </Accordion>

  )
}