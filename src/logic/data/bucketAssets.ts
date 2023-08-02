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


/* bucket images */
export const Img1 = `${url_bucket}/sharing/characters/${character_snake_case}/img1.jpg`;
export const Img2 = `${url_bucket}/sharing/characters/${character_snake_case}/img2.jpg`;
export const Img3 = `${url_bucket}/sharing/characters/${character_snake_case}/img3.jpg`;
export const TableImg = `${url_bucket}/${offer_snake_case}/tables/${language}/${currencyCode}.jpg`;

export const TopBannerImg = `${url_bucket}/sharing/banners/${countryCode}.jpg`;

export const BillGatesImg = `${url_bucket}/sharing/billgates/${offer_snake_case}.jpg`;
export const FBPostImg = `${url_bucket}/sharing/posts/${countryCode}.jpg`;
export const GIFImg = `${url_bucket}/sharing/gifs/${language}/${currencyCode}.jpg`;
export const FamilyImg = `${url_bucket}/sharing/family/${currencyCode}.jpg`;

export const CheckImg = `${url_bucket}/sharing/checks/${countryCode}.jpg`;
export const OfferBannerImg = `${url_bucket}/${offer_snake_case}/banners/${countryCode}.jpg`;
export const Step2Img = `${url_bucket}/sharing/steps/${language}/${currencyCode}/2.jpg`;
export const Step3Img = `${url_bucket}/sharing/steps/${language}/${currencyCode}/3.jpg`;

export const sideBarFormImg  = `${url_bucket}/${offer_snake_case}/forms/${countryCode}.jpg`;
