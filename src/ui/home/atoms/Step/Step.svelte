<script lang="ts">
  import { page } from "$app/stores";

  import type { StepProps } from "./Step.proptypes";

  import * as styles from "./Step.styles";

  import markIcon from "@icons/checkmark.png"

  export let type: StepProps["type"];
  export let title: StepProps["title"];
  export let description: StepProps["description"];
  export let img: StepProps["img"];

  type StringObject = {
		[key: string]: string;
	};
  const offers:StringObject = {
		"bitGptApp": "bit_gpt_app",
		"bitcoin360Ai": "bitcoin_360_ai",
		"bitcoinCode": "bitcoin_code",
		"bitcoinEra": "bitcoin_era",
		"bitsoft360": "bitsoft_360",
		"immediateEdge": "immediate_edge",
		"quantumAi": "quantum_ai"
	};

  if(img.includes("OFFER_NAME")) img = img.replace("OFFER_NAME", offers[$page.params.offer])

</script>

  <div class={styles.container}>
    <div class={styles.header}>
      {#if type==="marked"}
        <img class={styles.icon} src={markIcon} alt="mark icon">
      {/if}
      <span class={styles.title}>{title}</span>
    </div>
    <p class={styles.description}>{description}</p>
    <img class={styles.stepImg} src={img} alt="">
  </div>
