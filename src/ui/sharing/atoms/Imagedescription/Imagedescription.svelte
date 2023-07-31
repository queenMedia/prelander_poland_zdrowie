<script lang="ts">
  import config from "@config";
  import type { Props } from "./Imagedescription.proptypes";
  import * as styles from "./Imagedescription.styles";

  export let text: Props["text"];
  export let offer: Props["offer"];
  export let type: Props["type"];
  export let targetGeo: Props["targetGeo"];
  export let targetGeoCode: Props["targetGeoCode"];
  export let contentLnag: Props["contentLnag"];
  export let currency: Props["currency"];

  let image = "";
  switch (type) {
    case "banners":
      image = `${config.url_bucket}/banners/${targetGeo}.jpeg`;
      break;
    case "forms":
      image = `${config.url_bucket}/${offer}/forms/${targetGeoCode}.jpg`;
      break;
    case "modal":
      image = `${config.url_bucket}/${offer}/modal/modal.jpg`;
      break;
    case "tables":
      image = `${config.url_bucket}/${offer}/tables/${contentLnag}/${currency.code.toLowerCase()}.jpg`;
      break;
    case "billgates":
      image = `${config.url_bucket}/sharing/billgates/${offer}.jpg`;
      break;
    case "family":
      image = `${config.url_bucket}/sharing/family/${contentLnag}.jpg`;
      break;
    case "posts":
      image = `${config.url_bucket}/sharing/posts/${targetGeoCode}.jpg`;
      break;
    case "gif":
      image = `${config.url_bucket}/sharing/gifs/${contentLnag}/${currency.code.toLowerCase()}.jpg`;
      break;
    case "checks":
      image = `${config.url_bucket}/sharing/checks/${targetGeoCode}.jpg`;
      break;
    case "step2":
      image = `${config.url_bucket}/sharing/steps/${contentLnag}/${targetGeoCode}/2.jpg`;
      break;
    case "step3":
      image = `${config.url_bucket}/sharing/steps/${contentLnag}/${targetGeoCode}/3.jpg`;
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
