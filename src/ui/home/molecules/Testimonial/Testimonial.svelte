<script lang="ts">
  import type { Props } from "./Testimonial.proptypes";

  import * as styles from "./Testimonial.styles";

  export let prop: Props["prop"];
</script>

<div class={styles.testimonial}>
  {prop}
</div>
