<script lang="ts">
  import type { Props } from "./Sidebar.proptypes";

  import * as styles from "./Sidebar.styles";

  export let offer_name: Props["offer_name"];
</script>

<div class={styles.sidebar}>
  {offer_name}
  <!-- {prop} -->
</div>
