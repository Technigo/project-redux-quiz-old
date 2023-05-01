# Redux quiz group project

The task was to create a quiz with at least 5 questions using global state using Redux in React. The user was supposed to be informe wether an answer was right or wrong. At the end the results should be presented to the user.

## The problem

We started working in the CurrentQuestion-component changing the questions array to the list of questions we wanted. After that we planned which components we wanted and created them. We decied to use a button component that was supposed to be used all throughout the page. We managed to connect our components to the global store in the quiz.js. At the end of the quiz we decided that we wanted the user to go back to the Welcome page, therefore we thought we didn't need to call the restart function in the reducers but it turned out that if we didn't add it as an onClick the state would remain the same. This would result in the user automatically getting back to the QuizOver-component (which is the end of our quiz). We wanted to have the little television as a div where the questions would be displayed but we didn't manage to figure out how to do it without the hassle of fixing the positioning of the questions so we scrapped that idea due to lack of time. We also had some issues with the Footer blocking the QuestionsContainer, we eventually solved it by having the margin-bottom of the QuestionContainer be bigger than the height of the Footer.  

## View it live

https://javascript-redux-quiz.netlify.app
