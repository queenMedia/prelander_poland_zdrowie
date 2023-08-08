<script lang="ts">
	import config from '@config';
  import { onMount } from "svelte";
  import type { ModalProps } from "./Modal.proptypes";
  import * as styles from "./Modal.styles";
  import { A } from "@sharing/atoms"

  export let offer: ModalProps["offer"];
  export let type: ModalProps["type"];
  export let title: ModalProps["title"];
  export let subtitle: ModalProps["subtitle"];
  export let button_text: ModalProps["button_text"];
  export let color_button: ModalProps["color_button"];
  export let background_button: ModalProps["background_button"];

  const MODAL = `${config.url_bucket}/${offer}/${type}/modal.jpg`;
  
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
    }, 100000000000000);

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
          <span class={styles.container_button}>
            <A section="modal-button">
              <button class={styles.button(background_button,color_button)}>{button_text}</button>
            </A>              
          </span>
    </div>
  </div>
{/if}

