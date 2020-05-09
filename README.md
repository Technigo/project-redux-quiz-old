
## The questions array

You can find the `quiz` store in src/reducers/quiz.js. In it, there's a `questions` array with a couple of placeholder objects for you to get started with. You should replace these questions with your own ones.

You're free to restructure things if you want to, but it's recommended to stick with the current setup where each question has:

* `id` - a unique identifier for the question. You can just keep incrementing numbers for these.
* `question` - this is the text which is displayed to the user for this question. The example questions use a string of text, but you could turn this into an object if you wanted to include images or other data.
* `options` - an array of possible answers to the question which your user will choose from. Again, in the placeholder questions, we've used strings, but you can switch them to objects if you want to add additional details such as image urls.
* `correctAnswerIndex` - the index of the item in the `options` array which is the correct answer.

## Redux actions

In the `quiz` store, there's a few actions made for you:

### `submitAnswer`

Use this action when a user selects an answer to the question. You need to pass an object with a key `questionId` whose value is valid question id (from the question objects) and an `answerIndex` which is the index of the answer they chose.

<p>
<details><summary>Show submitAnswer example</summary>
<p>

Given the following question, for example:

```
{ id: 1, question: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 }
```

If the user clicks 'Asafa Powell' (index 3 in the options array), you'd dispatch the action to redux like this:

```
dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 3 }))
```

The redux state will then update the answers array and tell you if this was the correct answer or not.

</p>
</details>
</p>

### `goToNextQuestion`

After the user clicks an answer and you show them if they were correct or not, you should show a button to continue to the next question. When they click that button, dispatch this action.

<p>
<details><summary>Show goToNextQuestion example</summary>
<p>

```
dispatch(quiz.actions.goToNextQuestion())
```

</p>
</details>
</p>

### `restart`

At the end of the quiz, if you want to start over, you can dispatch this action.

<p>
<details><summary>Show restart example</summary>
<p>

```
dispatch(quiz.actions.restart())
```

</p>
</details>
</p>

## Selecting from the store

Use the redux dev tools in chrome to inspect the store and see what it contains. You can write your own selectors to fetch whatever you need from the store. We've given you one example in src/components/CurrentQuestion.js to get you started with fetching the current question from the store:

```js
const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
```

You can build up these selector functions to use other information you have to fetch specific things. For example, you could fetch the answer to a question:

```js
const answer = useSelector((state) => state.quiz.answers.find((a) => (
  a.questionId === question.id // question could come from the previous selector in the last example
)))
```

## What I learned 🧠

* How to interact with a global state using selectors and by dispatching actions

## Requirements 🧪

* The quiz should have at least 5 questions
* When the user selects an answer, it should show if they were correct or not
* While going through the quiz, it should show which question you're on, or how many left 
* When the user has answered all the questions, they should get to a summary screen which tells them how many the got correct or incorrect
* Having small components which interact with the store

## Stretch Goals I reached 🏃‍♂

* After selecting an answer, highlight the correct answer if they chose incorrectly
* A countdown timer to answer the question - if the user doesn't answer in time, they get the question wrong
* A timer for how long it took to complete the quiz
* Use images related to the question


