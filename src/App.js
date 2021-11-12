// importing React components
import React, {useState} from 'react';
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
import tv from './assets/tv.png';

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const MainContainer = styled.main`
    width: 100vw;
    margin: 0 auto;
    position: relative;
    height: 100vh;

    @media (min-width: 599px) {
      width: 700px;
      margin: 0 auto;
    }
  `;

  const TvContainer = styled.div`
    background-image: url(${tv});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 700px;
    position: absolute;
    height: auto;
  `;

  const TvQuestionContainer = styled.div`
    width:700px;
    margin-top:100px;
  `;
  return (
    <Provider store={store}>
      <MainContainer>
        <h1>Welcome to our Awareness quiz!</h1>
        <UserNameInput setDisplayQuestion={setDisplayQuestion}/>
        <UserInfo />
        {displayQuestion &&
        <>
          <TvQuestionContainer>
            {/* <TvContainer /> */}
            <CurrentQuestion />
          </TvQuestionContainer>
          <ProgressBar />
          </>}
      </MainContainer>
    </Provider>
  );
};
