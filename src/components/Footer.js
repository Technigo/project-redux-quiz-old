import React from "react";
import styled from "styled-components";

const PageFooter = styled.footer `
    display:flex;
    justify-content: center;
    background-color: #C3471B;
    margin-top: 20px;
    width: 100%;
    color: #fff;
    
`

export const Footer = () => {
    return(
        <PageFooter >
            <h3>Emma &bull; Kristiina &bull; Lovisa &bull; Mimmi &bull; Suki</h3>
        </PageFooter >
    )
}