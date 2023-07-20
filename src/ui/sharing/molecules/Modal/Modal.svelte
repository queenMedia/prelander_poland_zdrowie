<script lang="ts">
	import config from '@config';
  import { onMount } from "svelte";
  import type { Props } from "./Modal.proptypes";

  import * as styles from "./Modal.styles";
    import { Link } from '@sharing/atoms';

  export let offer: Props["offer"];
  export let type: Props["type"];
  export let title: Props["title"];
  export let subtitle: Props["subtitle"];
  export let button_text: Props["button_text"];

  const MODAL = `${config.bucket_link}${offer}/${type}/modal.jpg`;
  
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
        <button type="button" class={styles.close_modal} on:click={()=> { showModal = false }}>
        </button>
        <p class={styles.title("--text-white")}>{title}</p>
        <p class={styles.subtitle("--text-white")}>{subtitle}</p>
        <Link section="modal" content offer className={styles.container_button}>
          <button class={styles.button(offer)}>{button_text}</button>
        </Link>
    </div>
  </div>
{/if}

