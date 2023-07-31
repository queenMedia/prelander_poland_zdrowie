<script lang="ts">
  import {Link} from "@sharing/atoms";
  import { offersName } from "@utils/constants";
  import { page } from "$app/stores";
  import type { Props } from "./Offerbar.proptypes";
  import * as styles from "./Offerbar.styles";  

  export let offer_name: Props["offer_name"];
  export let redirect: Props["redirect"];
  export let character_name: Props["character_name"];
  export let offerBarText: Props["offerBarText"];
</script>

<div class={styles.offerbar}>
  <Link character_name={character_name} redirect={redirect} offerName="" section="offer bar" offer content className={styles.offerbar_button} parser={false}>
    {offerBarText.replace("OFFER_NAME", offer_name )}
  </Link>
</div>
