# Women in Computing - Redux Quiz

A web app honoring the women who have made remarkable contributions to the science of computing. Made with Redux, where the main goal was to learn about the global state.
The app was built by a group of five programmers, alternating between sessions of mob programming and individual work in separate branches.

With the participation of Ida Aspen, Maria Petersson, Isabel González, Emelie Lindblom, and Nina Rivera.

## Features

- Responsive UI for mobile, tablet and desktop
- Redux hooks: useSelector, useDispatch
- Separate redux component: A progress bar imported from react-bootstrap
- Summary screen displaying all answers and the total score

## Production process

- The UI was sketched on Jamboard during our mob programming session.
- Then we proceeded to create the quiz.js reducer. It contains the questions and the initial states (the index of the current question, the score, an empty array for the answers, and a boolean to determine whether the quiz is over).
- Then we created the CurrentQuestion component. Displaying the boolean for the correct/wrong answer in line 97 was the trickiest part. We didn't know how to reach answer.isCorrect. Our solution: Declaring the variables "question" and "answer" inside the component (thus reaching the correct path).
- The progress bar presented some styling challenges because react-bootstrap doesn't allow for much customization. We solved it through lots of trial and error.
- Displaying the correct answer in the Summary was tricky. In the beginning, we only managed to invoke the question index, but not the string containing the answer. We solved it by adding an additional property in "questions".
- Last but not least, we had a love-hate relationship with the score functionality. At first, we tried to create a separate score.js reducer with its respective Score.js component. But the use of conditionals and accessing the score proved to be quite complicated with this method. So in the end we declared an initial score on quiz.js together with an if-sentence that updates the state. Then it was easier to invoke the score in CurrentQuestion.js (and display it in the Summary).

## View it live

https://quiz-women-in-computer-science.netlify.app/
