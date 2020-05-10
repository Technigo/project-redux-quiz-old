import styled from 'styled-components'

// HOMEPAGE

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const HeaderContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 500px) {
    height: 100%;
    justify-content: center;
    position: static;
  }
`

export const Picture = styled.img`
  height: 220px;
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const PicContainer = styled.section`
  height: 220px;
  width: 100%;
  position: absolute;
  bottom: 0;
`

// CURRENT QUESTION

export const QuestionContainer = styled.section`
  padding: 0 20px 0 20px;
  display: flex;
  width: 100%;
  height: 55%;

  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 65%;
  }

  @media (max-width: 500px) {
    padding: 20px 0 0 0;
    max-height: 70%;
  }
`

export const NavContainer = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
   min-height: 20%;
   justify-content: center;
  }
`

export const ButtonContainer = styled.section`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: 330px;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-evenly;
  }
`

export const OptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-height: max-content;

  @media (max-width: 800px) {
    margin-top: 10px;
    grid-gap: 5px;
    height:
  }

  @media (max-width: 500px) {
    height: 60%;
  }
`

export const QuestionPicture = styled.img`
  object-fit: cover;
  margin-right: 10px;
  border: solid 2px rgb(240, 240, 245);
  border-radius: 10px;
  max-width: 40%;

  @media (max-width: 800px) {
    height: 55%;
    margin-right: 0;
    max-width: unset;
  }

  @media (max-width: 500px) {
    height: 40%;
    border-radius: 7px;
  }
`

// SUMMARY

export const SummaryPicture = styled.img`
  height: 220px;
  position: absolute;
  bottom: 20px;
  left: 20px;

  @media (max-width: 500px) {
    left: auto;
  }
`