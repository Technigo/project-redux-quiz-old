import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { StartPage } from 'components/Startpage'
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CurrentQuestion } from 'components/CurrentQuestion';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <ReactAudioPlayer src="jingle-bells-jazzy-style-christmas-swing-music-1284.mp3" type="audio/mpeg" autoPlay />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/quiz" element={<CurrentQuestion />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
