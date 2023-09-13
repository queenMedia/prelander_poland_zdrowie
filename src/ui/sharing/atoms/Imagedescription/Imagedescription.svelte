<script lang="ts">
  import config from "@config";
  import type { Props } from "./Imagedescription.proptypes";
  import * as styles from "./Imagedescription.styles";

  import { A } from "@sharing/atoms"

  export let text: Props["text"];
  export let img: Props["img"];

</script>

<div class={styles.imagedescription}>
  <A section="content">
    <img src={img} alt="" class={styles.image} />
  </A>
<!--   
  OLD CODE
  {#if text}
    <p class={styles.description("16")}>{text}</p>
  {/if} -->
  
  <span class={styles.description("13")}><slot></slot></span>
   
</div>
