<script lang="ts">

  	import { page } from "$app/stores";
    import { getTelegram } from "@services/globals";
    import { onMount } from "svelte";
    import { getLinkUrl } from "@services/bucket";

    import * as styles from "./A.styles";

    export let section: string;

    let character = "";
    let offer = "";

    onMount(() => {
        const urlSearchParams = new URLSearchParams($page.url.search);
        character = urlSearchParams.get("character") ||  "";
        offer = urlSearchParams.get("offer") || "";
    });
    
    let url_to_redirect = ""
    const handleClick = async () => {
        const localConfig = await getLinkUrl($page.url.origin);

        console.log(localConfig)
        
        if(localConfig.LINK)
            url_to_redirect = localConfig.LINK ? localConfig.LINK : null;

        if(url_to_redirect !== ""){
            window.open(url_to_redirect, "_blank", "noopener,noreferrer");
            await getTelegram({
                page: $page.url.origin,
                character: character,
                offer_name: offer,
                section: section,
            });
        } else {       
            alert("invalid url to redirect. Check your config file")
        }
    };
  
</script>

   
<span 
    class={styles.link[section]}
    on:click={handleClick} 
    on:keypress={handleClick}
>
    
    <slot></slot>
</span>