import config from "@config";
import { bucketConfigStore, bucketImagesStore } from "@stores";

const character_snake_case =  new URLSearchParams(window.location.search).get("character")
const offer_snake_case =  new URLSearchParams(window.location.search).get("offer")

let bucketConfig: any;
bucketConfigStore.subscribe((value) => {
    bucketConfig = value;

    const url_bucket = config.url_bucket;
    const language = (bucketConfig !== 0 && bucketConfig !== null) ? bucketConfig.contentKeys.language : null;
    const currencyCode = (bucketConfig !== 0 && bucketConfig !== null) ? bucketConfig.targetCurrency.code : null;
    const countryCode = (bucketConfig !== 0 && bucketConfig !== null) ? bucketConfig.targetKeys.countryCode : null;

    bucketImagesStore.set({
        Img1: `${url_bucket}/sharing/characters/${character_snake_case}/img1.jpg`,
        Img2: `${url_bucket}/sharing/characters/${character_snake_case}/img2.jpg`,
        Img3: `${url_bucket}/sharing/characters/${character_snake_case}/img3.jpg`,
        TableImg: `${url_bucket}/${offer_snake_case}/tables/${language}/${currencyCode}.jpg`,
        TopBannerImg: `${url_bucket}/sharing/banners/${countryCode}.jpg`,
        BillGatesImg: `${url_bucket}/sharing/billgates/${offer_snake_case}.jpg`,
        FBPostImg: `${url_bucket}/sharing/posts/${countryCode}.jpg`,
        GIFImg: `${url_bucket}/sharing/gifs/${language}/${currencyCode}.jpg`,
        FamilyImg: `${url_bucket}/sharing/family/${currencyCode}.jpg`,
        CheckImg: `${url_bucket}/sharing/checks/${countryCode}.jpg`,
        OfferBannerImg: `${url_bucket}/${offer_snake_case}/banners/${countryCode}.jpg`,
        Step2Img: `${url_bucket}/sharing/steps/${language}/${currencyCode}/2.jpg`,
        Step3Img: `${url_bucket}/sharing/steps/${language}/${currencyCode}/3.jpg`,
        sideBarFormImg: `${url_bucket}/${offer_snake_case}/forms/${countryCode}.jpg`,
    });
});