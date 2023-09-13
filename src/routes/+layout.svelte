<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { bucketConfigStore } from "@stores";

  import { layout } from "@styles";
  import { page as pageStyles } from "@home/styles";
  
  import { Offerbar, Modal } from "@sharing/molecules";
  import { Loader } from "@sharing/atoms";

  import { Content, Sidebar, Header, Footer } from "@home/organisms";
  import { Whitdrawals } from "@home/atoms";

  import Error from "@icons/error.png";
  import Loading from "@icons/loading-gif.gif";
  
  import { getConfig, getLinkUrl } from "@services/bucket";

  let offer_exist: boolean = false;
  let character_exists: boolean = false;
  
  
  let url_to_redirect: any = "";

  let localConfig: any = "";
  let bucketConfig: any = "";

  let loading: boolean = true;
  let pageExist: boolean = false;
  let character: string = "";
  let offer: string = ""; 

  onMount(async () => {

    character = new URLSearchParams($page.url.search).get("character") || "";
    offer = new URLSearchParams($page.url.search).get("offer") || "";

    [bucketConfig, localConfig] = await Promise.all([getConfig(character), getLinkUrl($page.url.origin)]);

    if(localConfig)
      url_to_redirect = localConfig.LINK ? localConfig.LINK : null;

    if(bucketConfig)
      offer_exist = Object.keys(bucketConfig.offers).includes(offer);

    character_exists = bucketConfig ? true : false;

    pageExist = (offer_exist && character_exists); 

    loading = false;

    bucketConfigStore.set(bucketConfig);
  });

</script>

{#if loading}
  <!-- <Loader /> -->
{:else if pageExist}
  <Header />
  <main class={layout.main}>
    <section class={pageStyles.section}>
        <Content bucket={bucketConfig} {offer}  /> 
        <Sidebar offer={bucketConfig.offers[offer]} bucket={bucketConfig} redirect={url_to_redirect} />
        <Modal
          {offer}
          type="modal"
          title={bucketConfig.modal.title}
          subtitle={bucketConfig.modal.subtitle}
          button_text={bucketConfig.modal.buttonText}
          color_button={bucketConfig.offers[offer].color_button}
          background_button={bucketConfig.offers[offer].background_button}
        />
        <Whitdrawals
          whitdrawalText={bucketConfig.withdrawalText}
        />
        <Offerbar
          offer_name={bucketConfig.offers[offer].name}
          offerBarText={bucketConfig.offerBarText}
        />
    </section>
  </main>
  <Footer />
{:else}
  <div class={pageStyles.error_container}>
    <img src={Error} alt="Error" class={pageStyles.error_image} />
    <h1 class={pageStyles.error_text}>Sorry!! Page not found</h1>
  </div>
{/if} 