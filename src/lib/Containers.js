import styled from 'styled-components'

export const StartQuizContainer = styled.section`
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

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 330px;
`

export const OptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5px;
  width: 80%;
  margin: 20px 0;
`
