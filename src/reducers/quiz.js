import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText:
      "Intergalactic is a song by American band Beastie Boys. Intergalactic was released as the first single from their fifth studio album, Hello Nasty. The single reached number 28 on the US Billboard Hot 100.",
    questionText1: "We like to kow witch GENRE Beastie Boys belongs to?",
    img: require("./assets/giphy.gif"),
    options: ["Hip Hop", "Classic", "Rock", "K-pop"],
    correctAnswerIndex: 0,
  },

  {
    id: 2,
    questionText: "This flat beat is something to remember! ",
    questionText1: "Who is the artist?",
<<<<<<< HEAD
    img: require("../assets/Mrozo.gif"),
=======
    img: require("./assets/mrozo.gif"),
>>>>>>> dca930fde17dc27e45a98bc44fdd9d34c4d74fbe
    options: ["Todd Terje", "Paul Kalkbrenner", "Mr. Oizo", "Moby"],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    questionText: "Somethimes all you need is to spice up your life! ",
    questionText1: "Which year did the Spice Girls journey start?",
    img: require("./assets/spicegirls.gif"),
    options: ["1901", "1999", "2001", "1994"],
    correctAnswerIndex: 3,
  },
  {
    id: 4,
    questionText:
      "Welcome to the Jungle is a song by American rock band Guns'N Roses? It reached number seven on the Billboard Hot 100. ",
    questionText1: "But who wrote the lyrics ",
    img: require("./assets/guns.gif"),
    options: ["Axl Rose ", "Slash", "Duff McKagan", "Izzy Stradlin"],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    questionText:
      "Soundgarden was an American rock band formed in Washington 1984. They achieved its biggest success with the 1994 album Superunknown, They yielded the Grammy Award-winning singles for this song and music video.",
    questionText1: "What was the name of the song? ",
<<<<<<< HEAD
    img: require("../assets/soundgarden.gif"),
=======
    img: require("./assets/busta.gif"),
>>>>>>> dca930fde17dc27e45a98bc44fdd9d34c4d74fbe
    options: ["Black or sun", "Black hole sun", "Slack or fun", "Sun or fun"],
    correctAnswerIndex: 1,
  },

  {
    id: 6,
    questionText:
      "Eminem  was the first rapper in history to win an Oscar for Best Original song in 8 mile.",
    questionText1: "What song was it, won the price?",
<<<<<<< HEAD
    img: require("../assets/Eminem.gif"),
=======
    img: require("./assets/eminem.gif"),
>>>>>>> dca930fde17dc27e45a98bc44fdd9d34c4d74fbe
    options: ["The Real Slim Shady", "Stan", "Lose Your Self", "May name is"],
    correctAnswerIndex: 2,
  },
  {
    id: 7,
    questionText:
      "Hanson boys was a boy band In the early to mid-1990. There song Mmmbop was nominated for two Grammys at the 40th Annual Grammy Awards and is the band's most successful single to date. ",
    questionText1: "But do you know the rest of the chorus, of Mmmbop?",
    img: require("./assets/hanson.gif"),
    options: ["ba dop duba", "ba duba dop", "duba dop ba", "duba duba pop"],
    correctAnswerIndex: 1,
  },
  {
    id: 8,
    questionText:
      "No Doubt is an American rock band from Anaheim, California, formed in 1986. They have sold over 33 million records worldwide.",
    questionText1: "Do you know the lead singers name?",
<<<<<<< HEAD
    img: require("../assets/nodoubt.gif"),
    options: ["Allison Wolfe", "Courtney Love ", "Gwen Stefani", "Cher"],
=======
    img: require("./assets/nodoubt.gif"),
    options: [
      "Allison Wolfe",
      "Courtney Love ",
      "Gwen Stefani",
      "Brain splash in the aquarium",
    ],
>>>>>>> dca930fde17dc27e45a98bc44fdd9d34c4d74fbe
    correctAnswerIndex: 2,
  },
  {
    id: 9,
    questionText:
      "Even to this day, Aerosmith is the best-selling American rock band of all time. They’ve sold more than 70 million albums in the US.",
    questionText1: "Can you guess how many they have sold worldwide",
    img: require("./assets/areosmith.gif"),
    options: ["100 million", "900 million", "200 million", "150 million"],
    correctAnswerIndex: 3,
  },
  {
    id: 10,
    questionText:
      "Frontman Kurt Cobain from Nirvana and Hole frontwoman Courtney Love (Hole) had one child. ",
    questionText1: "Do you know there child´s name?",
    img: require("./assets/nirvana.gif"),
    options: [
      "Frances Bean Cobain",
      "Franca Bean Cobain",
      "France Cobain Bean",
      "France Cobain Blackbean",
    ],
    correctAnswerIndex: 0,
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState;
    },
  },
});
