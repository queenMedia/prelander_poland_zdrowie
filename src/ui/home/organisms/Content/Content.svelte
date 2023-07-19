<script lang="ts">
  import type { Props } from "./Content.proptypes";

  import * as styles from "./Content.styles";

  import { Largebuttons, Readmore, Imagedescription } from "@sharing/atoms";
  export let offer_name: Props["offer_name"];
</script>

<div class={styles.content}>
  <Largebuttons text="hola" />
  <Readmore text="button" />
  <Imagedescription text="text" offer={offer_name} type="banners"/>
</div>
