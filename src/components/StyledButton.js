import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledButton = styled.button`
  font-family: 'Noto Serif', serif;
  font-weight: 900;
  cursor: pointer;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0 auto;
  width: 120px;
  padding: 12px 20px;
  border-style: none;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: -webkit-linear-gradient(45deg, #ffc107 0%, #ff8b5f 100%);
  background-image: linear-gradient(45deg, #ffc107 0%, #ff8b5f 100%);
  transition: 0.4s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 2px 8px 8px -5px;
    background-image: -webkit-linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
    background-image: linear-gradient(45deg, #ffc107 0%, #f76a35 100%);
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`
