<script lang="ts">
  import type { Props } from "./Readmore.proptypes";

  import * as styles from "./Readmore.styles";
  import ArrowDown from "@icons/arrow_down.png";

  export let text: Props["text"];
  export let hanldeReadMore: Props["hanldeReadMore"];

</script>

<div class={styles.container} on:click={hanldeReadMore} on:keypress={hanldeReadMore}>
  <button class={styles.readmore}>
    {text}
  </button>
  <img src={ArrowDown} alt="" width="40px" height="40px" />
</div>