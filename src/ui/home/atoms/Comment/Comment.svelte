<script lang="ts">
  import type { Props } from "./Comment.proptypes";

  import * as styles from "./Comment.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.comment}>
  {prop}
</div>
