<script lang="ts">
  import { Img2, TableImg } from "@data"

  import * as styles from "./Imagegroup.styles";
  import { A } from "@sharing/atoms"

</script>

<A section="content">
  <div class={styles.imagegroup}>
    <img class={styles.imageLeft} src={Img2} alt="" />
    <img class={styles.imageRight} src={TableImg} alt="" />
  </div>
</A>
