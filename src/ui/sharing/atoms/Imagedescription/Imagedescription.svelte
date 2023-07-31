<script lang="ts">
  import config from "@config";
  import type { Props } from "./Imagedescription.proptypes";
  import * as styles from "./Imagedescription.styles";

  export let text: Props["text"];
  export let offer: Props["offer"];
  export let type: Props["type"];
  export let targetCurrency: Props["targetCurrency"];
  export let contentKeys: Props["contentKeys"];
  export let targetKeys: Props["targetKeys"];

  let image = "";
  switch (type) {
    case "banners":
      image = `${config.url_bucket}/banners/${targetKeys.countryCode}.jpg`;
      break;
    case "forms":
      image = `${config.url_bucket}/${offer}/forms/${targetKeys.countryCode}.jpg`;
      break;
    case "modal":
      image = `${config.url_bucket}/${offer}/modal/modal.jpg`;
      break;
    case "tables":
      image = `${config.url_bucket}/${offer}/tables/${contentKeys.language}/${targetCurrency?.code}.jpg`;
      break;
    case "billgates":
      image = `${config.url_bucket}/sharing/billgates/${offer}.jpg`;
      break;
    case "family":
      image = `${config.url_bucket}/sharing/family/${targetCurrency?.code}.jpg`;
      break;
    case "posts":
      image = `${config.url_bucket}/sharing/posts/${targetKeys.countryCode}.jpg`;
      break;
    case "gif":
      image = `${config.url_bucket}/sharing/gifs/${contentKeys.language}/${targetCurrency?.code}.jpg`;
      break;
    case "checks":
      image = `${config.url_bucket}/sharing/checks/${targetKeys.countryCode}.jpg`;
      break;
    case "step2":
      image = `${config.url_bucket}/sharing/steps/${contentKeys.language}/${targetCurrency?.code}/2.jpg`;
      break;
    case "step3":
      image = `${config.url_bucket}/sharing/steps/${contentKeys.language}/${targetCurrency?.code}/3.jpg`;
      break;
    case "offerBanner":
      image = `${config.url_bucket}/${offer}/banners/${targetKeys.countryCode}.jpg`;
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
