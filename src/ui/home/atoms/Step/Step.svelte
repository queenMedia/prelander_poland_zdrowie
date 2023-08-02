<script lang="ts">
  import { page } from "$app/stores";
    import { Link } from "@sharing/atoms";

  import type { StepProps } from "./Step.proptypes";

  import * as styles from "./Step.styles";

  import markIcon from "@icons/checkmark.png"

  export let type: StepProps["type"];
  export let title: StepProps["title"];
  export let description: StepProps["description"];
  export let img: StepProps["img"];
  export let offer_name: StepProps["offer_name"];
  export let offer: StepProps["offer"];
  export let redirect: StepProps['redirect'];
  export let character_name: StepProps['character_name'];
  export let currency_simbol: StepProps['currency_simbol'];
  export let currency: StepProps['currency'];
  
  img = img.replace("OFFER_NAME", offer).replaceAll("CURRENCY", currency.toLocaleLowerCase().replace(" ", ""));

</script>
<div class={styles.container}>
  <div class={styles.header}>
    {#if type==="marked"}
      <img class={styles.icon} src={markIcon} alt="mark icon">
    {/if}
    <span class={styles.title}>{title.replaceAll("CURRENCY", currency_simbol)}</span>
  </div>
  <p class={styles.description}>{description.replaceAll("CURRENCY", currency_simbol)}</p>
  <img class={styles.stepImg} src={img} alt="">
</div>
