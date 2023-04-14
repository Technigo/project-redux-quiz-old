/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );
  /* Divided by the number of questions, so far hard coded */
  const correctPercent = (currentQuestion * 100) / 8;
  let percent = Number(correctPercent).toFixed();

  /* Styles of container and bar */
  const container = {
    height: '2rem',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    marginBottom: '0.5rem'
  };
  const bar = {
    display: 'flex',
    height: '100%',
    width: `${percent}%`,
    backgroundColor: '#FAD040',
    borderRadius: '10px 0 0 10px',
    // marginTop: '-1rem',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#0078BE'
  };
  const P = {
    paddingLeft: '15px'
  };

  return (
    <div style={container}>
      <div
        style={bar}
        role="progressbar"
        aria-valuenow={percent - 10}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <p style={P}>{percent}%</p>
      </div>
    </div>
  );
};
