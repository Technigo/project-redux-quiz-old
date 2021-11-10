/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const Summary = () => {
    const dispatch = useDispatch()
    const answers = useSelector((state) => state.quiz.answers) // asking store to give us anwers from quiz object


   /*  const restartQuiz = () => {
        dispatch(quiz.actions.restart())
    } */

    return (
        <main className="SummaryContainer">
            <h2>Summary</h2>
            <button onClick={() => dispatch(quiz.actions.restart())}>RESTART</button>
            
            {answers.map((answer) => (
            
            <div key={answer.question.questionText}>
          
                <p>
                    {answer.question.questionText}
                    <span>{answer.answer}</span>
                    {answer.isCorrect ? "✅" : "❌"}
                </p>
          
                {!answer.isCorrect ? answer.question.options[answer.question.correctAnswerIndex]: ""}
            </div>
      ))}

        </main>
    )

}





/* export const Summary = ({ setWasCorrectAnswerSelected }) => {
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
}; */

export default Summary;

            
            
