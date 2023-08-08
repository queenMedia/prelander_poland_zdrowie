import calibreBlack from '@fonts/calibre/CalibreBlack.otf'; //<- wrong format

const CalibriFontFace = `
    @font-face {
        font-family: 'TuFuente';
        src: url(${calibreBlack}) format('truetype');
    }
    @font-face {
        font-family: "MiFuente";
        src: url("fonts/mifuente-bold.woff2") format("woff2"),  /* Agrega las rutas de tus archivos de fuentes */
                url("fonts/mifuente-bold.woff") format("woff");
        font-weight: 800;  /* Especifica el peso de la fuente */
        font-style: normal;  /* Puedes usar "italic" para cursiva o "oblique" para itálica inclinada si están disponibles */
    }
    
    @font-face {
        font-family: "MiFuente";
        src: url("fonts/mifuente-regular.woff2") format("woff2"),
                url("fonts/mifuente-regular.woff") format("woff");
        font-weight: 400;
        font-style: italic;
    }
      
`

export default CalibriFontFace;