import React from "react";
import { Link } from "react-router-dom";

import {
  WelcomeWrapper,
  WelcomeContent,
  WelcomeTitle,
  WelcomeBtn
} from "WelcomeStyles";

export const WelcomePage = () => {
  return (
    <header>
      <WelcomeWrapper>
        <WelcomeContent>
          <WelcomeTitle>
            <h1>Sports Quiz</h1>
          </WelcomeTitle>
          <Link to="/quiz">
            <WelcomeBtn>Start Quiz!</WelcomeBtn>
          </Link>
        </WelcomeContent>
      </WelcomeWrapper>
    </header>
  )
};
