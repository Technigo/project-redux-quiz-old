import React from 'react'
import { RestartButton } from './Button'
import HeroSummaryContainer from './SummaryTestStyling';
import heroSummaryImage from '../assets/hero-summary-image.jpg';

export const SummaryTest = () => {
  return (
    <HeroSummaryContainer image={heroSummaryImage}>
      <RestartButton />
    </HeroSummaryContainer>
  )
}