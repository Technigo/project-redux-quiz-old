import styled from 'styled-components/macro'

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InnerWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 500px;
  flex-direction: column;
  position: absolute;
  @media (min-width: 1024px) {
    width: 60%
  }
`
