/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { Board } from 'components/Board';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from 'components/Start';
import { Footer } from 'components/Footer';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
      <Footer />
    </Provider>
  );
};

const StyledApp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
