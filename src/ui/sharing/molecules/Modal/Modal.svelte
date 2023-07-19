<script lang="ts">
  import type { Props } from "./Modal.proptypes";

  import * as styles from "./Modal.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.modal}>
  {prop}
</div>
