<script lang="ts">
  import type { Props } from "./Content.proptypes";

  import * as styles from "./Content.styles";

  import { Largebuttons, Readmore, Imagedescription, Link } from "@sharing/atoms";
  export let offer_name: Props["offer_name"];
</script>

<div class={styles.content}>
  <Largebuttons text="hola" />
  <Readmore text="button" />
  <Imagedescription text="text" offer={offer_name} type="banners"/>
  <Link color bold italic offer={false} section="content" text="Test" content={false} className=""/>
</div>
