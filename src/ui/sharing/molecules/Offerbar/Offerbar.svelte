<script lang="ts">
  import type { Props } from "./Offerbar.proptypes";

  import * as styles from "./Offerbar.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.offerbar}>
  {prop}
</div>
