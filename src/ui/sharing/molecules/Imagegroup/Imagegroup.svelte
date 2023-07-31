<script lang="ts">
  import { onMount } from "svelte";

  import type { ImageGroupProps } from "./Imagegroup.proptypes";

  import * as styles from "./Imagegroup.styles";

  import config from "@config";
  import { page } from "$app/stores";
  import { available_characters, offers } from "@utils/constants";

  export let offer_name: ImageGroupProps["offer_name"];
  export let character_name: ImageGroupProps["character_name"];
  export let currency: ImageGroupProps["currency"];
  export let contentLnag: ImageGroupProps["contentLnag"];

  const Img2 = `${config.url_bucket}/sharing/characters/${character_name}/img2.jpg`;
  const Tabel = `${config.url_bucket}/${offer_name}/tables/${contentLnag}/${currency.code.toLowerCase().replace(/\s/g, '')}.jpg`;
  console.log({Tabel});
  onMount(() => {});
</script>

<div class={styles.imagegroup}>
  <img class={styles.imageLeft} src={Img2} alt="" />
  <img class={styles.imageRight} src={Tabel} alt="" />
</div>
