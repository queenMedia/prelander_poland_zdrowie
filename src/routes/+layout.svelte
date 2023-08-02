<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  import { layout } from "@styles";
  import { page as pageStyles } from "@home/styles";
  
  import { Header } from "@sharing/organisms";
  import { Offerbar, Modal } from "@sharing/molecules";

  import { Content, Sidebar } from "@home/organisms";
  import { Whitdrawals } from "@home/atoms";

  import Error from "@icons/error.png";
  
  import { getConfig, getLinkUrl } from "@services/bucket";

  let offer_exist: boolean = false;
  let character_exists: boolean = false;
  
  
  let url_to_redirect: any;

  let localConfig: any;
  let bucketConfig: any;

  let loading: boolean = true;
  let character: string;
  let offer: string; 

  onMount(async () => {

    character = new URLSearchParams($page.url.search).get("character") || "";
    offer = new URLSearchParams($page.url.search).get("offer") || "";

    [bucketConfig, localConfig] = await Promise.all([getConfig(character), getLinkUrl($page.url.origin)]);

    url_to_redirect = localConfig.LINK ? localConfig.LINK : null;

    offer_exist = Object.keys(bucketConfig.offers).includes(offer);
    character_exists = character ? true : false;
    
    loading = !(offer_exist && character_exists); 
  
  });
</script>

<Header />

<main class={layout.main}>
  <section class={pageStyles.section}>
    {#if !loading}
      <Content bucket={bucketConfig} {offer}  /> 
      <Sidebar offer={bucketConfig.offers[offer]} bucket={bucketConfig} redirect={url_to_redirect} />
      <Modal
        {offer}
        type="modal"
        title={bucketConfig.modal.title}
        subtitle={bucketConfig.modal.subtitle}
        button_text={bucketConfig.modal.buttonText}
        offer_name={bucketConfig.offers[offer].name}
        color_button={bucketConfig.offers[offer].color_button}
        background_button={bucketConfig.offers[offer].background_button}
        redirect={url_to_redirect}
        currency={bucketConfig.targetCurrency.name}
        character_name={bucketConfig.fullName}
      />
      <Whitdrawals
        geo={bucketConfig.contentKeys.geoCapital}
        currency_simbol={bucketConfig.targetCurrency.symbol}
        whitdrawalText={bucketConfig.whitdrawalText}
      />
      <Offerbar
        character_name={bucketConfig.fullName}
        redirect={url_to_redirect}
        offer_name={bucketConfig.offers[offer].name}
        offerBarText={bucketConfig.offerBarText}
      />
    {:else}
      <!-- Where is the loader ?-->
      <div class={pageStyles.error_container}>
        <img src={Error} alt="Error" class={pageStyles.error_image} />
        <h1 class={pageStyles.error_text}>Sorry!! Page not found</h1>
      </div>
    {/if}
  </section>
</main>
