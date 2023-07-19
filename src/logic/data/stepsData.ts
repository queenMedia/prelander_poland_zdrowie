import config from "@config"

import step2 from "../../assets/images/sharing/steps/s2.jpg"
import step3 from "../../assets/images/sharing/steps/s3.jpg"

const urlImgStep1  = `${config.url_bucket}/OFFER_NAME/forms/${config.i18n_lang}.jpg`

export const stepsData = [
    {
        title: "Trinn 1:",
        description: "Registrer deg for gratis konto",
        img: urlImgStep1
    },
    {
        title: "Trinn 2:",
        description: "Sett inn minstebeløpet på 3,000 kr",
        img: step2
    },
    {
        title: "Trinn 3:",
        description: "Overfør fortjenesten til bankkontoen din!",
        img: step3
    }
];
export default stepsData;
