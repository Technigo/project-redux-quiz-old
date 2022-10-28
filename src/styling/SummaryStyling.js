import styled from 'styled-components/macro'

export const SummaryStyling = styled.div`

display: flex;
flex-direction: column;
align-items: center;

.credits-wrapper{
  display:flex;
  flex-direction: column;
  margin-left: 7vw;
}

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
  margin-left: 2vw;
}


td{
  width: 80vw;
  padding: 2px 2px 5px 2px}

  //Iphone SE
@media (max-width:388px){
.table-div{
width: 100%;
}

td{
max-width: 368px;
}

.question-p{
  min-width: 136px;
}
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
