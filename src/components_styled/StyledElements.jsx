import styled from "styled-components";

export const Main = styled.main`
  ${"" /* min-height: 100vh; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${
    "" /* &:before {
    border: 1px solid red;
    margin: 3vw;
  } */
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 25px;

  @media (min-width: 667px) {
    font-size: 37px;
    // margin: 8rem 1rem 3rem 1rem;
  }

  @media (min-width: 1024px) {
    // width: 45vw;
    // margin-top: 50px;
    margin-bottom: 150px;
    text-align: center;
    color: white;
    font-size: 37px;
  }
`;

export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  // padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 667px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 950px;
    gap: 100px;
  }
`;

export const WhiteBorder = styled.div`
  border: 1px solid white;
  // margin: 3vw;

  @media (min-width: 1024px) {
  }
`;

export const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 5rem 0;
  gap: 20px;
  justify-items: center;

  @media (min-width: 667px) {
    align-items: center;
    margin: 8rem 0;
    gap: 70px;
  }

  @media (min-width: 1024px) {
    width: 800px;
    margin-top: 4rem;
    gap: 15px;
  }

  @media (min-width: 1024px) {
    width: 800px;
    margin: 0 auto;
    display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items; center;
    // justify-content: space-between;
  }
`;

export const Button = styled.button`
  width: 130px;
  ${"" /* border-radius: 8px; */}
  padding: 17px;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-weight: bold;
  border-radius: 0%;
  border: 1px solid white;

  &:hover {
    // background-image: linear-gradient(120deg,#FFA8A8,#f8ffba);
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease;
  }

  @media (min-width: 768px) {
    width: 260px;
    font-size: 22px;
    min-height: 100px;
  }

  @media (min-width: 1024px) {
    width: 360px;
    min-height: 90px;
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`;

export const NavButtonIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 4px;
`;

export const NextButton = styled.button`
  border-radius: 50%;
  border: none;
  background-color: rgba(206, 212, 218, 0.6);
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SummaryDiv = styled.div`
  color: white;
  width: 100%;
  // h1 {
  //   font-size: 1.75rem;
  //   text-align: center;
  // }

  // h2 {
  //   font-size: 1.5rem;
  // }

  // p {
  //   font-size: 1.1rem;
  //   text-align: center;
  // }

  // @media (min-width: 768px) {

  //   }

  // @media (min-width: 1024px) {
  //   h2 {
  //     font-size: 1.75rem;
  //   }

  // }
`;

export const QADiv = styled.div`
  width: 100%;
  margin: 1rem 0;
  text-align: center;

  h1 {
    font-size: 1.75rem;
    // text-align: center;
  }
  h2 {
    font-size: 1.5rem;
    text-align: left;
  }

  .text-align-center {
    // text-align: center;
  }

  p {
    font-size: 1.1rem;
    // text-align: center;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(206, 212, 218, 0.6);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background: linear-gradient(
    90deg,
    rgba(202, 240, 248, 0.2) 0%,
    rgba(144, 224, 239, 0.2) 100%
  );
  transition: width 1s ease-in-out;
  height: 100%;
  position: absolute;
  top: 0;
`;
