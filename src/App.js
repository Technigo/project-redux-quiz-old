/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import Header from 'components/smallComponents/Header'
import { ContentSwitcher } from 'components/switcher/ContentSwitcher'
import styled from "styled-components"


const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

const Page = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const App = () => {
  return (
    <Page>
    <Provider store={store}>
      <Header />
      <ContentSwitcher />
      </Provider>
    </Page>
  );
};
