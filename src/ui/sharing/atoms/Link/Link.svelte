<script lang="ts">
  import type { Props } from "./Link.proptypes";

  import { getTelegram } from "@services/globals";
  import config from "@config";

  import * as styles from "./Link.styles";
  import { css, cx } from "@emotion/css";

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
  // console.log(redirect);
  const handleClick = async () => {
    await getTelegram({
      page: "CDT",
      character: character_name,
      offer_name: offerName as string,
      section: section,
    });
    if (redirect && redirect !== null) {
      window.open(redirect, "_blank", "noopener,noreferrer");
    }
  };

</script>
{#if content}
  <span on:click={handleClick} class={cx(className, css`cursor: pointer`)}>
    <slot />
  </span>
{:else if parser}
  <span on:click={handleClick} class={styles.link({color, bold, italic})}>
    <slot />
  </span>
{:else if color === true}
  <span class={styles.link({color, bold, italic})} on:click={handleClick}>
    {#if offer}
      {offerName}
    {:else}
      {@html text}
    {/if}
  </span>
{:else}
  <span class={cx(className, css`cursor: pointer`)} on:click={handleClick}>
    {#if offer}
      {offerName}
    {:else}
      {@html text}
    {/if}
  </span>
{/if}
