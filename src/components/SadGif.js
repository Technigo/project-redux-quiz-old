import React from 'react'
import styled from 'styled-components'

const StyledGif = styled.iframe`
    width: 100%;
    height: 100%;
    margin-top: 10px;
`


const SadGif = () => {
    return (
        <>
            <StyledGif src="https://giphy.com/embed/BgBf6pW9qOgQU" width="480" height="363" frameBorder="0" class="giphy-embed" allowFullScreen></StyledGif>
        </>
    )
}

export default SadGif