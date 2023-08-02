<script lang="ts">
  import type { Props } from "./Offerbar.proptypes";
  import * as styles from "./Offerbar.styles";  
  import { A } from "@sharing/atoms"

  export let offer_name: Props["offer_name"];
  export let offerBarText: Props["offerBarText"];
</script>

<A section="mini-modal">
  <div class={styles.offerbar}>
      <span class={styles.offerbar_button} >
          {offerBarText.replace("OFFER_NAME", offer_name )}
      </span>
  </div>
</A>
