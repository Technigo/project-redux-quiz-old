import React from "react";
import styled from "styled-components";

const HeaderText = styled.h1`
  font-family: "Russo One", sans-serif;
  font-size: 50px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  letter-spacing: 6px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = () => {
  return (
    <>
      <Image>
        <img
          src="https://i.postimg.cc/tRhdkhk0/STLOGO.png"
          width="500px"
          className="logo"
          alt="STRANGER THINGS"
        ></img>
      </Image>
      <HeaderText>QUIZ</HeaderText>
    </>
  );
};
