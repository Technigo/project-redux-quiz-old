import React from 'react';
import { Line } from 'rc-progress';

export default (props) => (
  <Line percent={props.currentQuestionId * (100 / 7)} strokeWidth={4} strokeColor="#D3D3D3" />
);