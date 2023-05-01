// To grab stuff from redux store:
// 1  import useSelector
// eslint-disable-next-line
  // 2 create a variable which will be equal to useSelector((store) => store.NameOfTheSliceThatYouWantToAccess.NameOfTheSpecificThingThatYouWantToAccess)

// Use reducers(functions) from the redux store
// 1  import useDispatch
// 2 create a variable called dispatch and set it's value to useDispatch()
// const dispatch = useDispatch();
// 3 import the slice from the reducers (the whole const)
// import { NameOfTheSliceYouWantToGet } from 'reducers/NameOfTheSliceYouWantToGet';
// 4 use the dispatch variable that you created to access the function
// dispatch(NameOfTheSliceYouWantToGet.actions.NameOfTheReducerYouWantToExecute())

// const ourWholeReduxStore = useSelector((apple) => apple);
// const isQuizOver = useSelector((store) => store.quiz.quizOver);

import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { WelcomePage } from 'components/WelcomePage';
import { Footer } from 'components/Footer';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<CurrentQuestion />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}
