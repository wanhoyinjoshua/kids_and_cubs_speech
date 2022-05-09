import { createGlobalStyle } from "styled-components";

import NameOfYourFontWoff from "./Bryndan_Write.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('FontName'), local('FontName'),
        
        url(${NameOfYourFontWoff}) format('typetrue');
        font-weight: 900;
        font-style: bold;
    }
`;
