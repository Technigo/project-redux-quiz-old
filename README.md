# Redux quiz group project

This week, the task is to build a quiz game using Redux. It's a multiple-choice quiz, so you'll need to define your own questions and a bunch of possible answers to present to your users.
✓ Your quiz should have at least 5 questions.
✓ When the user selects an answer, it should show if they were correct or not.
✓ While going through the quiz, it should show which question you're on, or how many are left - for example 'Question 5 / 15' or '10 questions left'.
✓ When the user has answered all the questions, they should get to a summary screen that tells them how many they got correct or incorrect.
✓ You should challenge yourself to make use of redux by making small components that interact with the store - don't just go for one big component.
✓ Don't forget CSS! Your quiz should be well-styled.

You start setting up your Redux store, which will hold the state of your quiz game. You can create separate reducers for each aspect of the game, such as the current question, the user's score, and whether or not the user has answered each question correctly.

Then, you can start building your components. Make sure to keep them small and reusable, so that they can interact with the store and update the game state as needed.

You should also create a CSS stylesheet to style your quiz game. Make it visually appealing and user-friendly, with clear buttons and indicators for the user's progress through the quiz.

## The problem

I worked alone this week. The problem was to learn about Redux for the first time. 
Redux is a state management library for JavaScript applications. It's commonly used with React, but can also be used with other libraries or frameworks.

The basic idea behind Redux is that the entire state of your application is kept in a single store, which is represented as a plain JavaScript object. The store is created using a function called a reducer, which takes the current state and an action as arguments and returns a new state. Actions are plain JavaScript objects that describe what happened in the application (e.g. a button was clicked).

One of the key features of Redux is its ability to manage asynchronous actions using middleware. Middleware is a function that sits between the action being dispatched and the reducer, allowing you to perform side effects like making API requests or logging actions.

Redux also has a concept of "reducers composition", which means that multiple reducers can be combined to manage different parts of the application state. This helps to keep your code organized and maintainable.

Overall, Redux can be a powerful tool for managing the state of your application, especially as it grows in complexity. However, it does have a bit of a learning curve, so it's important to invest some time in understanding its core concepts before diving in.

## View it live

https://redux-quiz-marvel.netlify.app/
