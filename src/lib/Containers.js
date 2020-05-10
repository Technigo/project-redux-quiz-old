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
`

export const Picture = styled.img`
  height: 220px;
`

export const PicContainer = styled.section`
  height: 220px;
  width: 100%;
  position: absolute;
  bottom: 0;
`

// CURRENT QUESTION

export const ButtonContainer = styled.section`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: 330px;
`

export const QuestionContainer = styled.section`
  padding: 20px 20px 0 20px;
  display: flex;
  width: 100%;
  height: 65%;
`

export const OptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  width: 700px;
`

export const QuestionPicture = styled.img`
  object-fit: cover;
  margin-right: 10px;
  border: solid 2px rgb(240, 240, 245);
  border-radius: 10px;
`

// SUMMARY

export const SummaryPicture = styled.img`
  height: 220px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`