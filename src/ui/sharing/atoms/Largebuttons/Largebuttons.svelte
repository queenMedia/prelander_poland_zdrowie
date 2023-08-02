<script lang="ts">
  import type { Props } from "./Largebuttons.proptypes";

  import * as styles from "./Largebuttons.styles";
  import { A } from "@sharing/atoms"

  export let text: Props["text"];
</script>

<div class={styles.container_to_center}>
  <button class={styles.largebuttons}>
    <A section="large-button">{text}</A>
  </button>
</div>

