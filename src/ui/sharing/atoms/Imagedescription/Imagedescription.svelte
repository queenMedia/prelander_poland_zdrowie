<script lang="ts">
  import config from "@config";
  import type { Props } from "./Imagedescription.proptypes";
  import * as styles from "./Imagedescription.styles";

  export let text: Props["text"];
  export let offer: Props["offer"];
  export let type: Props["type"];
  export let targetGeoCode: Props["targetGeoCode"];
  export let contentLang: Props["contentLang"];
  export let targetCurrency: Props["targetCurrency"];

  let image = "";
  switch (type) {
    case "banners":
      image = `${config.url_bucket}/banners/${targetGeoCode}.jpg`;
      break;
    case "forms":
      image = `${config.url_bucket}/${offer}/forms/${targetGeoCode}.jpg`;
      break;
    case "modal":
      image = `${config.url_bucket}/${offer}/modal/modal.jpg`;
      break;
    case "tables":
      image = `${config.url_bucket}/${offer}/tables/${contentLang}/${targetCurrency?.code}.jpg`;
      break;
    case "billgates":
      image = `${config.url_bucket}/sharing/billgates/${offer}.jpg`;
      break;
    case "family":
      image = `${config.url_bucket}/sharing/family/${contentLang}.jpg`;
      break;
    case "posts":
      image = `${config.url_bucket}/sharing/posts/${targetGeoCode}.jpg`;
      break;
    case "gif":
      image = `${config.url_bucket}/sharing/gifs/${contentLang}/${targetCurrency?.code}.jpg`;
      break;
    case "checks":
      image = `${config.url_bucket}/sharing/checks/${targetGeoCode}.jpg`;
      break;
    case "step2":
      image = `${config.url_bucket}/sharing/steps/${contentLang}/${targetGeoCode}/2.jpg`;
      break;
    case "step3":
      image = `${config.url_bucket}/sharing/steps/${contentLang}/${targetGeoCode}/3.jpg`;
      break;
    default:
      break;
  }
</script>

<div class={styles.imagedescription}>
  <img src={image} alt="" class={styles.image} />
  {#if text}
    <p class={styles.description("16")}>{text}</p>
  {/if}
</div>
