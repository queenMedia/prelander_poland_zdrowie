import CalibreBlack from "@fonts/calibre/Calibre-Black.ttf";
import CalibreBlackItalic from "@fonts/calibre/Calibre-Black.ttf";
import CalibreBold from "@fonts/calibre/Calibre-Bold.ttf";
import CalibreBoldItalic from "@fonts/calibre/Calibre-BoldItalic.ttf";
import CalibreLight from "@fonts/calibre/Calibre-Light.ttf";
import CalibreLightItalic from "@fonts/calibre/Calibre-LightItalic.ttf";
import CalibreMedium from "@fonts/calibre/Calibre-Medium.ttf";
import CalibreMediumItalic from "@fonts/calibre/Calibre-MediumItalic.ttf";
import CalibreRegular from "@fonts/calibre/Calibre-Regular.ttf";
import CalibreRegularItalic from "@fonts/calibre/Calibre-RegularItalic.ttf";
import CalibreSemibold from "@fonts/calibre/Calibre-Semibold.ttf";
import CalibreSemiboldItalic from "@fonts/calibre/Calibre-SemiboldItalic.ttf";
import CalibreThin from "@fonts/calibre/Calibre-Thin.ttf";
import CalibreThinItalic from "@fonts/calibre/Calibre-ThinItalic.ttf";

export const CalibreFontFaces = `
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreThin}') format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreThinItalic}') format('truetype');
    font-weight: 100;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreLight}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreLightItalic}') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreMedium}') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreMediumItalic}') format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreSemibold}') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreSemiboldItalic}') format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  
  /*@font-face {
    font-family: 'Calibre';
    src: url('${CalibreBold}') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Calibre';
    src: url('${CalibreBoldItalic}') format('truetype');
    font-weight: bold;
    font-style: italic;
  }*/

`