import React from 'react';
import { Line/* , Circle */ } from 'rc-progress';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const ProgressBar = () => {
  const currentQuestionIndex = useSelector((store) => {
    return store.quiz.currentQuestionIndex;
  });
  const questionTotal = useSelector((store) => store.quiz.questions.length);
  const percentComplete = (currentQuestionIndex / questionTotal) * 112;

  return (
    <ProgressMainBarWrapper>
      <ProgressBarSubWrapper>
        <Line percent={percentComplete} strokeWidth={1} strokeColor="#3d85c6" style={{ height: '20px', width: '90%' }} />
        {/* <Circle percent={percentComplete} strokeWidth={1} strokeColor="#D3D3D3" /> */}
      </ProgressBarSubWrapper>
    </ProgressMainBarWrapper>
  )
};

const ProgressMainBarWrapper = styled.div`
width: 50vw;
display: flex;
justify-content: center;
margin-top: 50px;
height: 50px;
`

const ProgressBarSubWrapper = styled.div`
width: 80%;
max-width: 200px;
height: 100%;
`