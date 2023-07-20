<script lang="ts">
  import config from "@config";


  import type { Props } from "./Imagedescription.proptypes";

  import * as styles from "./Imagedescription.styles";



  export let text: Props["text"];
  export let offer: Props["offer"];
  export let type: Props["type"];

  const image = `${config.bucket_link}${offer}/${type}/${config.i18n_lang}.jpg`;
  

</script>

<div class={styles.imagedescription}>
  <img src={image} alt="" class={styles.image}/>
  {#if text}
    <p class={styles.description("16")}>{text}</p>
  {/if}
</div>
