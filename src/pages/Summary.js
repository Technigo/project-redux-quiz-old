import React from "react";
import { useSelector } from "react-redux";
import RestartQuiz from "components/RestartQuiz";

const Summary = () => {

    const answers = useSelector((state) => state.quiz.answers)
    // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    const correctAnswers = answers.filter((correct) => correct.isCorrect === true)

    return (
        <div>
            {answers.map((answer) => (
                <div key={answer.questionId}>
                    <p>Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
                    <p>Your answer: <span className={answer.answer === answer.question.options[answer.question.correctAnswerIndex] ? 'green' : 'red'}>{answer.answer}</span>
                    </p>
                </div>
            ))}
            <p>Amount of correct answers: {correctAnswers.length}/ {answers.length}</p>
            <RestartQuiz />
        </div>
    )
}

export default Summary