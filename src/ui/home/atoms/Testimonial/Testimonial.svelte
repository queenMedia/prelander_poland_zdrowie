<script lang="ts">
  import type { TestimonialProps } from "./Testimonial.proptypes";
  import * as styles from "./Testimonial.styles";
  export let title: TestimonialProps["title"];
  export let description: TestimonialProps["description"];
  export let img: TestimonialProps["img"];
  export let name: TestimonialProps["name"];
  export let city: TestimonialProps["city"];
  export let offer_name: TestimonialProps["offer_name"];
  export let character_name: TestimonialProps["character_name"];
  export let currency_simbol: TestimonialProps['currency_simbol']; 

</script>

 
<div class={styles.container}>
  
  <h3 class={styles.title}>
    {@html title
      .replaceAll("CHARACTER", character_name)
      .replaceAll("CURRENCY", currency_simbol)
    }
  </h3>
  <img class={styles.img} src={img} alt="">
  <p class={styles.description}>
    {@html description
      .replaceAll("OFFER_NAME", `<span >${offer_name}</span>`)
      .replaceAll("CURRENCY", currency_simbol)
    }  
  </p>
  <p class={styles.name}>{@html name.replaceAll("CHARACTER", character_name)}</p>
  <p class={styles.name}>{@html city.replaceAll("CHARACTER", character_name)}</p>
</div>
