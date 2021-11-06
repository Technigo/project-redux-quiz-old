import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

const reducer = combineReducers({
  quiz: quiz.reducer
});

export const store = configureStore({ reducer }); // it's the same as reducer :reducer

// creating an empty Redux store