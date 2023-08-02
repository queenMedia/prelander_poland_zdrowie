<script lang="ts">
  import {Link} from "@sharing/atoms";
  import type { Props } from "./Offerbar.proptypes";
  import * as styles from "./Offerbar.styles";  
  import { A } from "@sharing/atoms"

  export let offer_name: Props["offer_name"];
  export let redirect: Props["redirect"];
  export let character_name: Props["character_name"];
  export let offerBarText: Props["offerBarText"];
</script>

<A section="mini-modal">
  <div class={styles.offerbar}>
      <span class={styles.offerbar_button} >
          {offerBarText.replace("OFFER_NAME", offer_name )}
      </span>
  </div>
</A>
