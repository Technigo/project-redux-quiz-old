import React from 'react'
// import styled from 'styled-components';
// import { useSelector, useDispatch } from "react-redux"
// import { quiz } from "../reducers/quiz"
// import { RestartButton } from './Button'
import HeroSummaryContainer, { Title } from './SummaryTestStyling';
import heroSummaryImage from '../assets/hero-summary-image.jpg';

export const SummaryTest = () => {
  return (
    <HeroSummaryContainer image={heroSummaryImage}>
      <Title text="Summary" />
      {/* <RestartButton /> */}
    </HeroSummaryContainer>
  )
}