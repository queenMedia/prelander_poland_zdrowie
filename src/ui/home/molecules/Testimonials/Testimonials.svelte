<script lang="ts">
  import type { Props } from "./Testimonials.proptypes";
  import * as styles from "./Testimonials.styles";
  import { Testimonial } from "@home/atoms";
  import { testimonialsData } from "@data";
  export let offer_name : Props['offer_name'];
  export let character_name : Props['character_name'];
  export let redirect: Props['redirect']; 
  export let currency_simbol: Props['currency_simbol']; 
  
</script>

<div class={styles.container}>
  <h3 class={styles.title}>LESERNES RESULTATER</h3>
  <div class={styles.testimonialsContainer}>
    {#each testimonialsData as testimonial}
      <Testimonial
        title={testimonial.title}
        description={testimonial.description}
        img={testimonial.img}
        name={testimonial.name}
        city={testimonial.city}
        offer_name={offer_name}
        character_name={character_name}
        redirect={redirect} 
        currency_simbol={currency_simbol}
      />
    {/each}
  </div>
</div>
