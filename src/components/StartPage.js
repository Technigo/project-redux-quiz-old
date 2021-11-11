import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { useHistory } from "react-router-dom";









const StartPage = () => {
  const history = useHistory();

  return (
   
     
       
         
          
  <main className="StartPageContainer">
            
            
          <ul>
  <li>
    <input type="checkbox" />
    <div className="startText" >Q</div>
  </li>
  <li>
    <input type="checkbox" />
    <div className="startText">U</div>
  </li>
  <li>
    <input type="checkbox" />
    <div className="startText">I</div>
  </li>
  <li>
    <input type="checkbox" />
    <div className="startText">Z</div>
  </li>
  
    
</ul>
            
            
            
            

            <button className="startBtn" type="button" onClick={() => history.push("/game")}>
            <div className="startText-btn">START</div>
            </button>
          
        </main>
      
    
  );
};

export default StartPage;
