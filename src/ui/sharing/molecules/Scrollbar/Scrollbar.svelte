<script lang="ts">
  import type { Props } from "./Scrollbar.proptypes";

  import * as styles from "./Scrollbar.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.scrollbar}>
  {prop}
</div>
