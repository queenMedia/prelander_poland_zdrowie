
import config from "@config";
import { getConfig } from "@services/bucket";

const character_snake_case =  new URLSearchParams(window.location.search).get("character")
const offer_snake_case =  new URLSearchParams(window.location.search).get("offer")

const getDataBucket = async () => {
    return await getConfig(character_snake_case || "");
}
const bucketConfig = await getDataBucket();

const url_bucket = config.url_bucket;
const language = bucketConfig.contentKeys.language;
const currencyCode = bucketConfig.targetCurrency.code;
const countryCode = bucketConfig.targetKeys.countryCode;

const sideBarFormImg  = `${url_bucket}/${offer_snake_case}/forms/${countryCode}.jpg`;
const Step2Img = `${url_bucket}/sharing/steps/${language}/${currencyCode}/2.jpg`;
const Step3Img = `${url_bucket}/sharing/steps/${language}/${currencyCode}/3.jpg`;

export const stepsData = [
    {
        title: "Trinn 1:",
        description: "Registrer deg for gratis konto",
        img: sideBarFormImg
    },
    {
        title: "Trinn 2:",
        description: "Sett inn minstebeløpet på 3,000 kr",
        img: Step2Img
    },
    {
        title: "Trinn 3:",
        description: "Overfør fortjenesten til bankkontoen din!",
        img: Step3Img
    }
];
export default stepsData;
