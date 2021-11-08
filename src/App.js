import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { Main } from "components/Main";
import styled from "styled-components";
// import { CurrentQuestion } from "components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <>
      <ImageContainer></ImageContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

const ImageContainer = styled.section`
  position: relative;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  opacity: 0.7;
  background-image: url(${require(`./pictures/firstpage-picture.jpg`)});
  z-index: -1;
  position: absolute;
`;
