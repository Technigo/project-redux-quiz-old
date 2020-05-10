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
  height: 300px;
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
  padding: 20px 20px 0 20px;
  display: flex;
  width: 100%;
  height: 65%;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 75%;
  }

  @media (max-width: 500px) {
    height: 65%;
    padding: 20px 0 0 0;
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
  width: 700px;

  @media (max-width: 800px) {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    grid-gap: 5px;
  }
`

export const QuestionPicture = styled.img`
  object-fit: cover;
  margin-right: 10px;
  border: solid 2px rgb(240, 240, 245);
  border-radius: 10px;

  @media (max-width: 800px) {
    max-height: 65%;
    margin-right: 0;
  }

  @media (max-width: 500px) {
    max-height: 60%;
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