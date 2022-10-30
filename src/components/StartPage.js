import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ImgBackground, Button } from './Styles/GlobalStyles';

const StartPage = () => {
  return (
    <ImgBackground>
      <Container>
        <h1>
            Hello, this is a quiz of &ldquo;How I met your mother&ldquo;.<br />
            Let&apos;s see how much you know about this show!
        </h1>
        <Link to="/quiz">
          <Button>
              START QUIZ
          </Button>
        </Link>
      </Container>
    </ImgBackground>
  )
}

export default StartPage;