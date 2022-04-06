import styled from "styled-components";

export const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h1`
  padding: 1.5rem;
  margin-top: 30px;
  text-align: center;
  color: white;
  // width: 70vw;
  
  @media (min-width: 1024px) {
      width: 75vw; 
    }
`;
    
export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 667px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 950px;
  }
`;


export const WhiteBorder = styled.span `
    border: 1px solid white;
    margin: 2vw;
`


export const ButtonContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center; 
    margin: 8rem 0;
    gap: 25px;
    justify-items: center;
    

    @media (min-width: 667px) {
    
    }
    
    @media (min-width: 1024px) {
        width: 800px;
        margin: 0 auto; 
        display: flex; 
        // flex-direction: row;
        // justify-content: center; 
        // align-items; center;
        // justify-content: space-between;  
    }

`;

export const Button = styled.button`
    width: 150px;
    border-radius: 8px;
    padding: 17px;
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



    @media (min-width: 768px) {
        
      }

    @media (min-width: 1024px) {
        
       
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

