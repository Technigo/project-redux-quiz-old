// importing React components
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

// reducers
import { quiz } from 'reducers/quiz';

// Components
import UserInfo from 'components/UserInfo';
import UserNameInput from 'components/UserNameInput';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { ProgressBar } from './components/ProgressBar';
// import tv from './assets/tv.png';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const MainContainer = styled.main`
    width: 100vw;
    margin: 0 auto;
    height: 100vh;

    @media (min-width: 599px) {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
  `;

  const QuestionAndProgress = styled.div`
    width: 100%;
    height: 50vh;
    margin-top: 40px;
    position: relative;

    @media (min-width: 599px) {
      width: 100%;
      height:600px;
      position: relative;
    }
  `;

  return (
    <Provider store={store}>
      <MainContainer>
        <h1>Welcome to our Awareness quiz!</h1>
        <UserNameInput setDisplayQuestion={setDisplayQuestion} />
        <UserInfo />
        {displayQuestion && (
          <>
            <QuestionAndProgress>
              <CurrentQuestion />
            </QuestionAndProgress>
            <ProgressBar />
          </>
        )}
      </MainContainer>
    </Provider>
  );
};
