// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// ////////////// STYLED COMPONENTS /////////////// //

// PARAGRAPH STYLING P
export const StyledWelcomeText = styled.h1`
    color: #4F200D;
    font-family: 'Roboto Condensed';
    font-size: 2.5rem;
    
    @media (min-width: 668px) {
        font-size: 3rem;
    }
    `;

// QUESTION TEXT STYLING H1
export const StyledQuestionText = styled.h3`
    color: #4F200D;
    font-family: 'Roboto Condensed';
    font-size: 1rem;
    
    @media (min-width: 668px) {
        font-size: 2rem;
    }
    `;

// PARAGRAPH STYLING P
export const StyledParagraphText = styled.p`
    color: #4F200D;
    font-size: 1rem;
    line-height: 1rem;

    @media (min-width: 668px) {
    font-size: 1.7rem;
    line-height: 2rem;
    }

    `;

// FOOTER TEXT STYLING
export const StyledFooterTextH2 = styled.h2`
    color: #FFD93D;
    font-size: 1rem;
    `;