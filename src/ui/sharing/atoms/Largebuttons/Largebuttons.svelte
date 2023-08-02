<script lang="ts">
  import type { Props } from "./Largebuttons.proptypes";

  import * as styles from "./Largebuttons.styles";

  export let text: Props["text"];
</script>

<div class={styles.container_to_center}>
  <button class={styles.largebuttons}>
    {text}
  </button>
</div>

