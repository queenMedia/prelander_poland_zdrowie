<script lang="ts">
  import type { Props } from "./Secondcontent.proptypes";

  import * as styles from "./Secondcontent.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.secondcontent}>
  {prop}
</div>
