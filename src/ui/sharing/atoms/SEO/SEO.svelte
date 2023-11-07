<script lang="ts">
  import config from "@config";

  import type { Props } from "./SEO.proptypes";

  export let title: Props["title"] = null;
  export let home: Props["home"] = false;
  export let description: Props["description"] = "SEO";
  export let metas: Props["metas"] = [];
  export let metaid: Props["metaid"] = "id";

  $: titleSeo = title;
</script>

<svelte:head>
  <title>
    {titleSeo}
  </title>
  <meta name="description" content={description} />

  {#each metas as meta (meta[metaid])}
    <meta {...meta} />
  {/each}
</svelte:head>
