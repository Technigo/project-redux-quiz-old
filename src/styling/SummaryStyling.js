import styled from 'styled-components/macro'

export const SummaryStyling = styled.div`

@font-face {
font-family: "Rosebright";
src: local("Rosebright"),
 url("./fonts/rosebright.personal-use.ttf") format("truetype");
font-weight: bold;
}

display: flex;
flex-direction: column;
align-items: center;

h1 {
  color: #821c1c;
  font-size: 10vw;
  font-family: 'VintageRoundPersonalUse';
  margin-top: 5vh;
}

p{
  color: lightgrey; 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
}

.question-p{
  color:grey;
}

.table-div{
  margin-left: 16vw;
}

td{
  width: 80vw;
  padding: 2px 2px 5px 2px;
}


@media (min-width: 768px) {
h1 {
  color: #821c1c;
  font-size: 5.5vw;
  font-family: 'VintageRoundPersonalUse';
  margin-top: 3vw;
}
p{
  color: lightgrey; 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.question-p{
  color:grey;
}

.table-div{
  margin-left: 16vw;
}

td{
  width: 18vw;
  max-width: 30vw;
  padding: 5px 3px 2px 3px;
}
}

`
