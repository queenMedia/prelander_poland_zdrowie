<script lang="ts">
  import { onMount } from 'svelte';

  import type { ImageGroupProps } from "./Imagegroup.proptypes";

  import * as styles from "./Imagegroup.styles";

  import config from "@config";

  export let offer_name: ImageGroupProps["offer_name"];

  let Img2: string;
  let tableImg: string;

  onMount(async () => {
    Img2 = (await import(`../../../../assets/images/sharing/content/img2.jpg`)).default;
    tableImg = (await import(`../../../../assets/images/${offer_name}/tables/${config.i18n_lang}.jpg`)).default;
  });

</script>

<div class={styles.imagegroup}>
  <img class={styles.imageLeft} src={Img2} alt="">
  <img class={styles.imageRight} src={tableImg} alt="">
</div>
