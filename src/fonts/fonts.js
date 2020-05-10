import { createGlobalStyle } from 'styled-components';

import ImpactTTF from './impact.ttf';
import ImpactWoff from './impact.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Impact';
        src: local('Impact'), local('Impact'),
        url(${ImpactTTF}) format('ttf'),
        url(${ImpactWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
