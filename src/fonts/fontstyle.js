import { createGlobalStyle } from "styled-components";

import NameOfYourFontWoff from "./Bryndan_Write.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('FontName'), local('FontName'),
        
        url(${NameOfYourFontWoff}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
