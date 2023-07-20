<script lang="ts">
  import {Link} from "@sharing/atoms";
  import { offersName } from "@utils/constants";
  import { page } from "$app/stores";

  import * as styles from "./Offerbar.styles";

</script>

<div class={styles.offerbar}>
  <Link section="offer bar" offer content className={styles.offerbar_button}>
    Prøv {offersName[$page.params.offer]} selv.
  </Link>
</div>
