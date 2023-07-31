<script lang="ts">
  import {Link} from "@sharing/atoms";
  import { offersName } from "@utils/constants";
  import { page } from "$app/stores";
  import type { Props } from "./Offerbar.proptypes";
  import * as styles from "./Offerbar.styles";  
  export let offer_name: Props["offer_name"];
  export let redirect: Props["redirect"];
  export let character_name: Props["character_name"];
</script>

<div class={styles.offerbar}>
  <Link character_name={character_name} redirect={redirect} offerName="" section="offer bar" offer content className={styles.offerbar_button} parser={false}>
    PROVA {offer_name} PER TE STESSO.
  </Link>
</div>
