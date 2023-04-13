import styled from 'styled-components';

const HeroSummaryContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    background-position: left;
  }
  @media screen and (min-width: 1440px) {
    min-height: 80vh;
  }
  @media screen and (min-width: 1632px) {
    min-height: 90vh;
  }
  @media screen and (max-width: 1024px) {
    min-height: 80vh;
  }
`;

export default HeroSummaryContainer;
