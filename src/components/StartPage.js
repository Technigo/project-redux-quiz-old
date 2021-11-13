import React from  'react'
import { useDispatch, useSelector } from "react-redux"
import { quiz } from "reducers/quiz"
import { BackgroundImage } from './BackgroundImage'


export const StartPage = () => {
    const dispatch = useDispatch()
    const quizStart = useSelector((state) => state.quiz.quizStart)

    if (quizStart) {
        return (
            <>
                <BackgroundImage />
                <section className='Firstpage-container'>
                    <p>8 questions</p>
                    <h1>About random stuff</h1>
                    <button
                        className="restart-btn"
                        onClick={() => dispatch(quiz.actions.start())}
                        > Let's get started!
            </button>
                </section>
            </>
        )
    } else return null

}
