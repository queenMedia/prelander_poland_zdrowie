
import { bucketImagesStore } from "@stores";
import { derived } from 'svelte/store';

export const stepsData = derived(
    bucketImagesStore,
    ($bucketImagesStore) => [
      {
        title: "Krok 1:",
        description: "Zarejestruj się i utwórz bezpłatne konto",
        img: $bucketImagesStore.sideBarFormImg
    },
    {
        title: "Krok 2:",
        description: "Wpłata minimum 1310 CURRENCY",
        img: $bucketImagesStore.Step2Img
    },
    {
        title: "Krok 3:",
        description: "Wypłać korzyści, przelewając je na swoje konto bankowe.",
        img: $bucketImagesStore.Step3Img
    }
]);
export default stepsData;
