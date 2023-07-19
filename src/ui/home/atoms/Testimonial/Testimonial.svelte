<script lang="ts">
  import type { TestimonialProps } from "./Testimonial.proptypes";

  import * as styles from "./Testimonial.styles";

  export let title: TestimonialProps["title"];
  export let description: TestimonialProps["description"];
  export let img: TestimonialProps["img"];
  export let name: TestimonialProps["name"];
  export let city: TestimonialProps["city"];

</script>

<div class={styles.container}>
  <h3 class={styles.title}>{title}</h3>
  <img class={styles.img} src={img} alt="">
  <p class={styles.description}>{description}</p>
  <p class={styles.name}>{name}</p>
  <p class={styles.name}>{city}</p>
</div>
