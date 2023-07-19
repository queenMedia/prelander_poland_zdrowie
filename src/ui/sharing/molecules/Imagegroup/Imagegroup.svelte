<script lang="ts">
  import type { Props } from "./Imagegroup.proptypes";

  import * as styles from "./Imagegroup.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.imagegroup}>
  {prop}
</div>
