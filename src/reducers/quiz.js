import { createSlice } from "@reduxjs/toolkit";

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
    img: require("./assets/mrozo.gif"),
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
    img: require("./assets/soundgarden.gif"),
    options: ["Black or sun", "Black hole sun", "Slack or fun", "Sun or fun"],
    correctAnswerIndex: 1,
  },

  {
    id: 6,
    questionText:
      "Eminem  was the first rapper in history to win an Oscar for Best Original song in 8 mile.",
    questionText1: "What song was it, won the price?",
    img: require("./assets/eminem.gif"),
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
    img: require("./assets/nodoubt.gif"),
    options: ["Allison Wolfe", "Courtney Love ", "Gwen Stefani", "Cher"],
    correctAnswerIndex: 2,
  },
  {
    id: 9,
    questionText: "This trippy video really brings back some good memories.",
    questionText1: "What's the name of the song?",
    img: require("./assets/busta.gif"),
    options: [
      "Fla$ing Your Money",
      "PMW",
      "Brain Splash At The Aquarium",
      "Gimme Some More",
    ],
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

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState;
    },
  },
});
