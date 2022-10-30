import React from 'react';

const ProgressBar = (props) => {
  const { completed } = props;
  const containerStyles = {
    height: 20,
    width: '35%',
    backgroundColor: 'rgba(168, 167, 235, 0.772)',
    borderRadius: 50,
    margin: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'rgba(25, 22, 213, 0.772)',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: '15'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;