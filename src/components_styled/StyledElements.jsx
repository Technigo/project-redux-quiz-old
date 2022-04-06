import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding: 1.5rem;
  margin-top: 30px;
  text-align: center;
  color: white;
  // width: 70vw;

  @media (min-width: 1024px) {
    width: 75vw;
  }
`;

export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 667px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 950px;
  }
`;

export const WhiteBorder = styled.span`
  border: 1px solid white;
  margin: 2vw;
`;

export const ButtonContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 8rem 0;
  gap: 25px;
  justify-items: center;

  @media (min-width: 667px) {
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
  border-radius: 8px;
  padding: 17px;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-weight: bold;

  &:hover {
    // background-image: linear-gradient(120deg,#FFA8A8,#f8ffba);
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
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
