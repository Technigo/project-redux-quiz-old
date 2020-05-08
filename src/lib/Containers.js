import styled from 'styled-components'

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 400px;
  background: white;
  border: solid 2px black;
`

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Picture = styled.img`
  height: 170px;
`

export const PicContainer = styled.section`
  height: 170px;
  width: 100%;
  position: absolute;
  bottom: 0;
`
