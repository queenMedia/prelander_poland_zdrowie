<script lang="ts">
  import type { Props } from "./Comments.proptypes";

  import * as styles from "./Comments.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.comments}>
  {prop}
</div>
