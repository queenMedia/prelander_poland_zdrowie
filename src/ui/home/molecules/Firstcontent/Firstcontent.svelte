<script lang="ts">
  import type { Props } from "./Firstcontent.proptypes";

  import * as styles from "./Firstcontent.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.firstcontent}>
  {prop}
</div>
