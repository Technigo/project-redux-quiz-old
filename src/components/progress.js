import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  const correctPercent = (currentQuestion * 100) / 5;
  const percent = Number(correctPercent).toFixed();

  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const playerElement = document.querySelector('.player');
    const playerWidth = playerElement.offsetWidth;
    const leftPosition = (containerWidth * percent) / 100 - playerWidth / 2;
    playerElement.style.left = `${leftPosition}px`;
  }, [percent]);

  const trail = [...Array(6).keys()].join(' ');

  const ProgressBarContainer = styled.div`
    height: 1rem;
    width: 40%;
    align-self: center;
    background-image: linear-gradient(to right, #ffff ${percent}%, transparent ${percent}%);
    border-radius: 10px;
    margin-bottom: 0.5rem;
    position: relative;
  `;

  const Trail = styled.div`
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #0078be ${percent}%, #eee ${percent}%);
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #ffff;
    padding: 0 5px;
    box-sizing: border-box;
  `;

  return (
    <ProgressBarContainer ref={containerRef}>
      <Trail>{trail}</Trail>
      <Player
        src="https://assets10.lottiefiles.com/packages/lf20_gn57ndas.json"
        className="player"
        loop
        autoplay
        speed={1}
        style={{
          width: '100%',
          height: '10rem',
          position: 'absolute',
          top: 0,
          left: 0
        }} />
    </ProgressBarContainer>
  );
};
