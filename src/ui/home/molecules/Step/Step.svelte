<script lang="ts">
  import type { Props } from "./Step.proptypes";

  import * as styles from "./Step.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.step}>
  {prop}
</div>
