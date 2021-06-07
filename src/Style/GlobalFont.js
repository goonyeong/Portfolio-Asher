import {createGlobalStyle} from "styled-components";
import RobotoThin from "Fonts/Roboto-Thin.woff";
import RobotoThinItalic from "Fonts/Roboto-ThinItalic.woff";
import RobotoLight from "Fonts/Roboto-Light.woff";
import RobotoLightItalic from "Fonts/Roboto-LightItalic.woff";
import RobotoRegular from "Fonts/Roboto-Regular.woff";
import RobotoRegularItalic from "Fonts/Roboto-Italic.woff";
import RobotoMedium from "Fonts/Roboto-Medium.woff";
import RobotoMediumItalic from "Fonts/Roboto-MediumItalic.woff";
import RobotoBold from "Fonts/Roboto-Bold.woff";
import RobotoBoldItalic from "Fonts/Roboto-BoldItalic.woff";
import RobotoBlack from "Fonts/Roboto-Black.woff";
import RobotoBlackItalic from "Fonts/Roboto-BlackItalic.woff";



const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoThin}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoThinItalic}) format('woff');
        font-weight: 100;
        font-style: italic;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoLightItalic}) format('woff');
        font-weight: 300;
        font-style: italic;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoRegularItalic}) format('woff');
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoMediumItalic}) format('woff');
        font-weight: 500;
        font-style: italic;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoBold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoBoldItalic}) format('woff');
        font-weight: bold;
        font-style: italic;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoBlack}) format('woff');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto";
        src: local("Roboto"), url(${RobotoBlackItalic}) format('woff');
        font-weight: 900;
        font-style: italic;
    }
`;

export default GlobalFont;