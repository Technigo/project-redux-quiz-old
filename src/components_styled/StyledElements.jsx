import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;/
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h1`
  padding: 1.5rem;
  margin-top: 30px;
  text-align: center;
  color: white;
  // width: 70vw;
`;

export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
`;

export const SpanBorder = styled.span`
  border: 1px solid white;
  position: absolute;
  top: 3%;
  left: 3.5%;
  z-index: -5;
  width: 350px;
  padding: 100px 0px 520px 0px;
`;

export const ButtonContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center; 
    margin: 8rem 0;
    gap: 2vw;
    justify-items: center;
    

    @media (min-width: 667px) {
    
      }
    
    @media (min-width: 1024px) {
        width: 800px;
        margin: 0 auto; 
        display: flex; 
        flex-direction: row;
        justify-content: center; 
        align-items; center;
        justify-content: space-between;  
    }

`;

export const Button = styled.button`
    width: 150px;
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

    @media (min-width: 768px) {
        
      }

    @media (min-width: 1024px) {
        width
       
    }

`;
