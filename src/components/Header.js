import React from "react";
import styled from "styled-components";

const HeaderText = styled.h1`
  font-family: "Russo One", sans-serif;
`;

export const Header = () => {
  return (
    <>
      <HeaderText>Stranger Things Quiz</HeaderText>
      {/* <img src='https://i.postimg.cc/tRhdkhk0/STLOGO.png' width="500px" className="logo"></img> */}
    </>
  );
};
