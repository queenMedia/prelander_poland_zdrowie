<script lang="ts">
  import type { Props } from "./Withdrawal.proptypes";

  import * as styles from "./Withdrawal.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.withdrawal}>
  {prop}
</div>
