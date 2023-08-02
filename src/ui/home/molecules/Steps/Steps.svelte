<script lang="ts">
  import type { Props } from "./Steps.proptypes";
  import * as styles from "./Steps.styles";
  import { Step } from "@home/atoms";
  import { stepsData } from "@data";
  import { A } from "@sharing/atoms"
  export let offer: Props["offer"];
  export let currency_simbol: Props['currency_simbol'];
  export let currency: Props['currency'];
  
</script>

<div class={styles.container}>
  <h3 class={styles.title}><A section="steps">LESERNES RESULTATER</A></h3>
  <div class={styles.testimonialsContainer}>
    {#each stepsData as step}
      <A section="step-card">
        <Step
        type="marked"
        title={step.title}
        description={step.description}
        img={step.img}
        offer={offer}
        currency_simbol={currency_simbol}
        currency={currency}
      />
      </A>
    {/each} 
  </div>
</div>
