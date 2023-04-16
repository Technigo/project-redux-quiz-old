import React from 'react';
import { CurrentQuestion } from 'components/CurrentQuestion';
import './question.css';

export const Question = () => {
  return (
    <div className="questions-background">
      <CurrentQuestion />
    </div>
  );
}