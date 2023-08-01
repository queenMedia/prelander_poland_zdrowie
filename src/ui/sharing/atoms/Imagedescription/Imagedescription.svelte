<script lang="ts">
  import config from "@config";
  import type { Props } from "./Imagedescription.proptypes";
  import * as styles from "./Imagedescription.styles";

  export let text: Props["text"];
  export let img: Props["img"];

</script>

<div class={styles.imagedescription}>
  <img src={img} alt="" class={styles.image} />
  {#if text}
    <p class={styles.description("16")}>{text}</p>
  {/if}
</div>
