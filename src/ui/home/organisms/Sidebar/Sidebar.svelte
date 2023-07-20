<script lang="ts">
  import type { SideBarProps } from "./Sidebar.proptypes";

  import * as styles from "./Sidebar.styles";
  import { Testimonials, Steps } from "@home/molecules";

  export let offer_name: SideBarProps['offer_name'];
  
</script>

<div class={styles.container}>
  <Testimonials />
  <Steps />
</div>
