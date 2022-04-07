import styled from "styled-components";

export const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 25px;

  @media (min-width: 667px) {
    font-size: 37px;
    margin: 8rem 1rem 3rem 1rem;
  }
  
  @media (min-width: 1024px) {
      width: 45vw;
      margin-top: 50px;
      margin-bottom: 150px;
      text-align: center;
      color: white;
      font-size: 25px;
    }
`;
    
export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 950px;
    gap: 100px;
  }
`;


export const WhiteBorder = styled.span `
    border: 1px solid white;
    margin: 3vw;
    
    
    
    @media (min-width: 1024px) {
      // height: 90vh;
    }
`


export const ButtonContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center; 
    margin: 5rem 0;
    gap: 20px;
    justify-items: center;
  
    @media (min-width: 667px) {
      align-items: center; 
      margin: 8rem 0;
      gap: 70px;
    }
    
    @media (min-width: 1024px) {
        width: 800px;
        margin-top: 4rem;
        gap: 15px;
    }

`;

export const Button = styled.button`
    width: 150px;
    border-radius: 8px;
    // padding: 17px;
    font-size: 18px;
    background-color: rgba(0,0,0,0);
    color: white;
    font-weight: bold;
    min-height: 82px;
    
    &:hover {
    // background-image: linear-gradient(120deg,#FFA8A8,#f8ffba);
    background-color: rgba(255,255,255,0.7);
    cursor: pointer;
    color: rgba(0,0,0,0.9);
    transition: 0.3s ease;
    }§1q

    @media (min-width: 768px) {
      width: 260px;
      // padding: 17px;
      font-size: 22px;
      min-height: 100px;
      }

    @media (min-width: 1024px) {
      width: 360px;
      font-size: 22px;
      min-height: 60px;
      border-radius: 0%;
      border: 1px solid blue;
       
    }
`;

export const NextButton = styled.button`
    width: 100px;
    border-radius: 8px;
    padding: 17px;
    margin-bottom: 20px;
    font-size: 18px;
    background-color: rgba(0,0,0,0);
    color: white;
    font-weight: bold;


    &:hover {
      // background-image: linear-gradient(120deg,#FFA8A8,#f8ffba);
      background-color: rgba(255,255,255,0.7);
      cursor: pointer;
      color: rgba(0,0,0,0.9);
      transition: 0.3s ease;

      }
    
    @media (min-width: 1024px) {
          
        
    }
  
  `;

