<script lang="ts">
  import { onMount } from "svelte";
  import type { ImageGroupProps } from "./Imagegroup.proptypes";
  import * as styles from "./Imagegroup.styles";
  import config from "@config";
  import { page } from "$app/stores";
  import { available_characters, offers } from "@utils/constants";

  export let offer_name: ImageGroupProps["offer_name"];
  export let character_name: ImageGroupProps["character_name"];
  export let targetCurrency: ImageGroupProps["targetCurrency"];
  export let contentLang: ImageGroupProps["contentLang"];

  const Img2 = `${config.url_bucket}/sharing/characters/${character_name}/img2.jpg`;
  const Tabel = `${config.url_bucket}/${offer_name}/tables/${contentLang}/${targetCurrency}.jpg`;
  onMount(() => {});
</script>

<div class={styles.imagegroup}>
  <img class={styles.imageLeft} src={Img2} alt="" />
  <img class={styles.imageRight} src={Tabel} alt="" />
</div>
