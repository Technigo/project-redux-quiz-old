# Redux quiz group project

This week, your team's task is to build a quiz game using Redux. It's a multiple choice quiz, so you'll need to define your own questions and a bunch of possible answers to present to your users.
In the repo, we've defined a Redux store and a reducer with a few actions you can use to control your quiz. You need to work as a team to use the state to render the quiz questions one at a time. When rendering a question, you should render the question itself and also the possible answers. The user then clicks an answer and you should show if it is correct or not before letting the user continue on to the next question.

We've connected the redux dots and set up a store from the reducer and passed the store into a Provider in `./src/App.js`. We've also created a starting point for you - a component which selects the current question from the store and renders the question, in `./src/components/CurrentQuestion.js.`

- Your quiz should have at least 5 questions.
- When the user selects an answer, it should show if they were correct or not.
- While going through the quiz, it should show which question you're on, or how many left - for example 'Question 5 / 15' or '10 questions left'.
- When the user has answered all the questions, they should get to a summary screen which tells them how many they got correct or incorrect.
- You should challenge yourself to make use of redux by making small components which interact with the store - don't just go for one big component.

see the oficial documentation of [Redux](https://react-redux.js.org/introduction/getting-started)

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
