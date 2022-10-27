import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { CurrentQuestion } from 'components/CurrentQuestion';
import { OpeningScreen } from 'components/OpeningScreen';
import Footer from 'components/Footer';
import { OuterWrapper } from 'styledcomponents/GlobaStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OpeningScreen />} />
            <Route path="/quiz" element={<CurrentQuestion />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </OuterWrapper>
    </Provider>
  );
};
