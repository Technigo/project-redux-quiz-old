import React from 'react'
import styled from 'styled-components'

const StyledChart = styled.div`
  background: conic-gradient(
    #00b33c ${(props) => props.incorrectPercent}%,
    #cc0000 0 ${(props) => props.correctPercent}%
  );
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 1em;
`

const StyledChartText = styled.p`
  color: #fff;
  font-weight: bold;
  margin-top: -30px;
`

const Chart = ({ data }) => {
  const incorrectPercent = (data.correctQus / data.noOfQus) * 100
  const correctPercent = 100 - (data.correctQus / data.noOfQus) * 100
  return (
    <>
      <StyledChart
        correctPercent={correctPercent}
        incorrectPercent={incorrectPercent}
      >
        <StyledChartText>{data.category}</StyledChartText>
      </StyledChart>
    </>
  )
}

export default Chart
