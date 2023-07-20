<script lang="ts">
  import * as styles from "./Steps.styles";
  import { Step } from "@home/atoms";
  import { stepsData } from "@data";

</script>

<div class={styles.container}>
  <h3 class={styles.title}>LESERNES RESULTATER</h3>
  <div class={styles.testimonialsContainer}>
    {#each stepsData as step}
      <Step
        type="marked"
        title={step.title}
        description={step.description}
        img={step.img}
      />
    {/each} 
  </div>
</div>
