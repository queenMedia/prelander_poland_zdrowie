<script lang="ts">
    import type { CustomtextProps } from "./Customtext.prototypes"
  
    import * as styles from "./Customtext.styles";
  
    export let text: CustomtextProps["text"];
    export let type: CustomtextProps["type"];
  
  </script>

  {#if type === "title"}
    <h1 class={styles.title}>{text}</h1>
  {:else if type==="subtitle"}
    <h2 class={styles.subtitle}>{text}</h2>
  {:else if type==="paragraph"}
    <p class={styles.paragraph}>{text}</p>
  {/if}

  