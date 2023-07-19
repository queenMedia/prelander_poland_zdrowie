<script lang="ts">
  import * as styles from "./Testimonials.styles";
  import { Testimonial } from "@home/atoms";
  import { testimonialsData } from "@data";

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
      />
    {/each}
  </div>
</div>
