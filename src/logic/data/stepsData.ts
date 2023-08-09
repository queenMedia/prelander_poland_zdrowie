
import config from "@config";
import { getConfig } from "@services/bucket";

const character_snake_case =  new URLSearchParams(window.location.search).get("character")
const offer_snake_case =  new URLSearchParams(window.location.search).get("offer")

const getDataBucket = async () => {
    return await getConfig(character_snake_case || "");
}
const bucketConfig = await getDataBucket();

const url_bucket = config.url_bucket;
const language = (bucketConfig !== 0) ? bucketConfig.contentKeys.language : null;
const currencyCode = (bucketConfig !== 0) ? bucketConfig.targetCurrency.code : null;
const countryCode = (bucketConfig !== 0) ? bucketConfig.targetKeys.countryCode : null;

const sideBarFormImg  = `${url_bucket}/${offer_snake_case}/forms/${countryCode}.jpg`;
const Step2Img = `${url_bucket}/sharing/steps/${language}/${currencyCode}/2.jpg`;
const Step3Img = `${url_bucket}/sharing/steps/${language}/${currencyCode}/3.jpg`;

export const stepsData = [
    {
        title: "Krok 1:",
        description: "Zarejestruj się i utwórz bezpłatne konto",
        img: sideBarFormImg
    },
    {
        title: "Krok 2:",
        description: "Wpłata minimum 1,206 CURRENCY",
        img: Step2Img
    },
    {
        title: "Krok 3:",
        description: "Wypłać korzyści, przelewając je na swoje konto bankowe.",
        img: Step3Img
    }
];
export default stepsData;
