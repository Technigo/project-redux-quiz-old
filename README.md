


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
* Use images related to the question
* Enabled and disabled buttons for different conditions


