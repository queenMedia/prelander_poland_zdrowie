<script lang="ts">
  import { bucketImagesStore } from "@stores";
  import * as styles from "./Imagegroup.styles";
  import { A } from "@sharing/atoms"
  let Img2 = "";
  let TableImg = "";
  bucketImagesStore.subscribe((images) => {
    Img2 = images.Img2;
    TableImg = images.TableImg;
  });
</script>

<A section="content">
  <div class={styles.imagegroup}>
    <img class={styles.imageLeft} src={Img2} alt="" />
    <img class={styles.imageRight} src={TableImg} alt="" />
  </div>
</A>
