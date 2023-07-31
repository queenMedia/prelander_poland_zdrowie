<script lang="ts">
	import config from '@config';
  import { onMount } from "svelte";
  import type { Props } from "./Modal.proptypes";

  import * as styles from "./Modal.styles";
  import { Link } from '@sharing/atoms';

  export let offer: Props["offer"];
  export let offer_name: Props["offer_name"];
  export let type: Props["type"];
  export let title: Props["title"];
  export let subtitle: Props["subtitle"];
  export let button_text: Props["button_text"];
  export let color_button: Props["color_button"];
  export let background_button: Props["background_button"];
  export let redirect: Props["redirect"];
  export let character_name: Props["character_name"];
  export let currency: Props["currency"];
  

  const MODAL = `${config.url_bucket}/${offer}/${type}/modal.jpg`;

  console.log({MODAL})
  
  $: showModal = false;
  $: dimensions = {
    width: 0, 
    height: 0
  };
  onMount( () => {
		const img = new Image();
    img.src = MODAL;

    img.onload = () => {
      dimensions = { width: (img.width+66), height: (img.height+66) };
    };
    const interval = setInterval(() => {
      showModal = true;
    }, 50000);

    return () => {
      clearInterval(interval);
    };
	});
</script>
{#if showModal}
  <div class={styles.modal}>
    <div class={styles.modal_container({...dimensions, bg: MODAL})}>
        <button type="button" class={styles.close_modal(color_button)} on:click={()=> { showModal = false }}>
        </button>
        <p class={styles.title(color_button)}>{title}</p>
        <p class={styles.subtitle(color_button)}>{subtitle}</p>
        <Link character_name={character_name} redirect={redirect} offerName="" section="modal" content offer className={styles.container_button} parser={false}>
          <button class={styles.button(background_button,color_button)}>{button_text}</button>
        </Link>
    </div>
  </div>
{/if}

