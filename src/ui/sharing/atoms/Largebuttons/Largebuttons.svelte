<script lang="ts">
  import type { Props } from "./Largebuttons.proptypes";

  import * as styles from "./Largebuttons.styles";

  export let text: Props["text"];
</script>

<button class={styles.largebuttons}>
  {text}
</button>
