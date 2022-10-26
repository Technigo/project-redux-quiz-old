import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { quiz } from 'reducers/quiz';
import Header from 'components/Header';
import Footer from 'components/Footer';
import StartPage from 'components/Startpage';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Wrapper } from 'styledcomponents/Global';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/quiz" element={<CurrentQuestion />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}
