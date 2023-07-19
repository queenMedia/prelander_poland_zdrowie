<script lang="ts">
  import { onMount } from 'svelte';
	
	let Img:string;
	
	const sleep = (ms: any) => new Promise(f => setTimeout(f, ms));

  import type { Props } from "./Imagedescription.proptypes";

  import * as styles from "./Imagedescription.styles";

  import config from "@config";


  export let text: Props["text"];
  export let offer: Props["offer"];
  export let type: Props["type"];
  
  onMount(async () => {
		await sleep(1000);
		Img = (await import(`../../../../assets/images/${offer}/${type}/${config.i18n_lang}.jpg`)).default;
	});

</script>

<div class={styles.imagedescription}>
  <img src={Img} alt="" class={styles.image}/>
  {#if text}
    {text}
  {/if}
</div>
