import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  font-family: "Space Mono";
}

h1 {
    font-family: "Orbitron";
    color: white;
}
`

export default GlobalStyle;