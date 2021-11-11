import React from 'react'
import styled from 'styled-components'

const StyledGif = styled.iframe`
    height: 100%;
    width: 100%;
    margin-top: 10px;
`

const HappyGif = () => {
    return (
        <StyledGif title="gif" src="https://giphy.com/embed/RbDKaczqWovIugyJmW" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen>
        </StyledGif>
    )
}

export default HappyGif