
import step2 from "../../assets/images/sharing/steps/s2.jpg"
import step3 from "../../assets/images/sharing/steps/s3.jpg"

import config from "@config";
import { getConfig } from "@services/bucket";

const character_snake_case =  new URLSearchParams(window.location.search).get("character")
const offer_snake_case =  new URLSearchParams(window.location.search).get("offer")

const getDataBucket = async () => {
    return await getConfig(character_snake_case || "");
}
const bucketConfig = await getDataBucket();

const url_bucket = config.url_bucket;
const countryCode = bucketConfig.targetKeys.countryCode;

const sideBarFormImg  = `${url_bucket}/${offer_snake_case}/forms/${countryCode}.jpg`;

export const stepsData = [
    {
        title: "Trinn 1:",
        description: "Registrer deg for gratis konto",
        img: sideBarFormImg
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
