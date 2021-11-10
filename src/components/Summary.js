/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { ResetButton } from './Buttons';

export const Summary = ({ setWasCorrectAnswerSelected }) => {
    const answersArray = useSelector((state) => state.quiz.answers);
    const rightAnswersArray = answersArray.filter(
        (answer) => answer.isCorrect === true
    );

    return (
        <SummaryOuterWrapper>
            {answersArray.map((answer) => {

                return (
                    <SummaryInnerWrapper key={answer.questionId}>

                        <SummaryHeader>
                            Question: {answer.question.questionText}
                        </SummaryHeader>

                        <SummaryTextHighlighted>
                            Your answer: {answer.answer}
                        </SummaryTextHighlighted>

                        <SummaryText>
                            Correct answer:{' '}
                            {answer.question.options[answer.question.correctAnswerIndex]}
                        </SummaryText>
                        
                    </SummaryInnerWrapper>
                );
            })};

            <p>Your score was: {rightAnswersArray.length} of {answersArray.length}</p>
            
            {<ResetButton
                title="Reset Quiz"
                setWasCorrectAnswerSelected={setWasCorrectAnswerSelected}
            />}

        </SummaryOuterWrapper>
    );
};

            
            
