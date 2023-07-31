<script lang="ts">
  import type { TestimonialProps } from "./Testimonial.proptypes";
  import { page } from "$app/stores";
  import * as styles from "./Testimonial.styles";
  import { offersName } from "@utils/constants"
  import { Link } from "@sharing/atoms";
  import { onMount } from "svelte";
  export let title: TestimonialProps["title"];
  export let description: TestimonialProps["description"];
  export let img: TestimonialProps["img"];
  export let name: TestimonialProps["name"];
  export let city: TestimonialProps["city"];
  export let offer_name: TestimonialProps["offer_name"];
  export let character_name: TestimonialProps["character_name"];
  export let redirect: TestimonialProps['redirect']; 
  export let currency_simbol: TestimonialProps['currency_simbol']; 
  
  let partTexts:any = [];
  $:textParts = partTexts;
  onMount(() => {

    partTexts = description.split(/(OFFER)/).map(part => {
      return {
        isOffer: part === 'OFFER',
        text: part
      };
    });
  });

</script>
 
<div class={styles.container}>
  
  <h3 class={styles.title}>{@html title.replaceAll("OFFER", `<Link character_name={character_name} redirect={redirect} color bold italic offer section="content" text="" content={false} className="" parser={false} />`).replaceAll("CHARACTER", character_name).replaceAll("CURRENCY", currency_simbol)}</h3>
  <img class={styles.img} src={img} alt="">
  <p class={styles.description}>
  {#each textParts as part}
    {#if part.isOffer}
      <Link character_name={character_name} redirect={redirect} offerName={offer_name} color bold italic offer section="content" text="" content={false} className="" parser={false} />
    {:else}
      {@html part.text.replaceAll("CHARACTER", character_name).replaceAll("CURRENCY", currency_simbol)}
    {/if}
  {/each}</p>
  <p class={styles.name}>{@html name.replaceAll("OFFER",`<Link character_name={character_name} redirect={redirect} color bold italic offer section="content" text="" content={false} className="" parser={false} />`).replaceAll("CHARACTER", character_name)}</p>
  <p class={styles.name}>{@html city.replaceAll("OFFER",`<Link character_name={character_name} redirect={redirect} color bold italic offer section="content" text="" content={false} className="" parser={false} />`).replaceAll("CHARACTER", character_name)}</p>
</div>
