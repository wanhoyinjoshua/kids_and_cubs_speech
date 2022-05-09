import { createGlobalStyle } from "styled-components";
import MaisonBook from "./Bryndan_Write.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Maison Nueue';
    src: url(${MaisonBook});
  }
  .logotag {
     font-family: 'Maison Nueue';
  }
`;

export default GlobalStyle;
