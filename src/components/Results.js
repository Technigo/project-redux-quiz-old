import React from 'react';

const Results = (props) => {
  const { score } = props;
  return (
    <h2>Your score was {score}</h2>
  )
}

export default Results;