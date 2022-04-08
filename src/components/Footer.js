import React from "react";
import styled from "styled-components";

const WrapFooter = styled.footer`
  margin-bottom: 10px;
`;

const FooterText = styled.h2`
  text-align: center;
  padding: 10px;
  color: white;
  font-size: 15px;
`;

export const Footer = () => {
  return (
    <>
      <WrapFooter>
        <FooterText>
          Made by Ida Näslund, Linnea Frisk, Simon Andersson, Justine Zwiazek
          for Technigo
        </FooterText>
      </WrapFooter>
    </>
  );
};
