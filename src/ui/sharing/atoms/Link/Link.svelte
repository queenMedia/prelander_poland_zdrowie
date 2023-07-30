<script lang="ts">
  import type { Props } from "./Link.proptypes";

	import { offersName } from "@utils/constants";
  import { getTelegram } from "@services/globals";
	import { page } from "$app/stores";
  import config from "@config";

  import * as styles from "./Link.styles";
  export let color: Props["color"]=false;
  export let bold: Props["bold"]=false;
  export let italic: Props["italic"]=false;
  export let offer: Props["offer"];
  export let offerName: Props["offerName"];
  export let text: Props["text"] = null;
  export let section: Props["section"];
  export let content: Props["content"];
  export let className: Props["className"];
  export let parser: Props["parser"];
  export let redirect: Props["redirect"];
  export let character_name: Props["character_name"];

  const handleClick = async () => {
    await getTelegram({
      page: config.page,
      character: config.character,
      offer_name: offersName[$page.params.offer],
      section: section,
    });
    window.open(config.link, "_blank", "noopener,noreferrer");
  };

</script>
{#if content}
  <span on:click={handleClick} class={className}>
    <slot />
  </span>
{:else}
  <span class={styles.link({color, bold, italic})} on:click={handleClick}>
    {#if offer}
      {offersName[$page.params.offer]}
    {:else}
      {text}
    {/if}
  </span>
{/if}
