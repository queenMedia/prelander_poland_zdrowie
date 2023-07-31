<script lang="ts">
  import { layout } from "@styles";
  import { Header } from "@sharing/organisms";
  import { onMount } from "svelte";
  import { page as pageStyles } from "@home/styles";
  import { page } from "$app/stores";
  import { Content, Sidebar } from "@home/organisms";
  import { offers } from "@utils/constants";
  import Error from "@icons/error.png";
  import Modal from "../ui/sharing/molecules/Modal/Modal.svelte";
  import { Offerbar } from "@sharing/molecules";
  import config from "@config";
  import { Whitdrawals } from "@home/atoms";

  let page_exist: boolean = false;
  let character_exists: boolean = false;
  let redirect: any;
  let objectLink: any;
  let bucket: any;
  let loading = true;
  let character: string;
  let offer: string;

  const getConfig = async (charachter: string) => {
    const url = `${config.url_bucket}/characters/${charachter}.json`;
    const response = await fetch(url, {
      method: "GET",
      headers: { Origin: "http://localhost:5173" },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error en la solicitud:", response.statusText);
      return undefined;
    }
  };

  const getLinkUrl = async (domain: string) => {
    try {
      const url = `${domain}/config.json`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Origin: "http://localhost:5173",
        },
      });
      const data: any = await response.json();
      return data;
    } catch (error) {
      return undefined;
    }
  };

  onMount(async () => {
    character =
      new URLSearchParams(window.location.search).get("character") || "";
    offer = new URLSearchParams(window.location.search).get("offer") || "";
    [bucket, objectLink] = await Promise.all([
      getConfig(character || ""),
      getLinkUrl($page.url.origin),
    ]);
    console.log({ bucket, objectLink });
    redirect = objectLink ? objectLink?.LINK : null;
    page_exist = Object.keys(bucket?.offers)?.includes(offer || "");
    character_exists = bucket?.character?.fullName ? true : false;
    loading = page_exist && character_exists;
    console.log({ loading });
    console.log("here", bucket);
  });
</script>

<Header />

<main class={layout.main}>
  <section class={pageStyles.section}>
    {#if !loading}
      <Content {bucket} {character} {offer} {redirect} />
      <Sidebar offer={bucket.offers[offer]} {bucket} {redirect} />
      <Modal
        {offer}
        type="modal"
        title="Non perdete l'occasione!"
        subtitle="Questa è l'ultima occasione per partecipare"
        button_text="Iniziare ora"
        offer_name={bucket.offers[offer].name}
        color_button={bucket.offers[offer].color_button}
        background_button={bucket.offers[offer].background_button}
        {redirect}
        currency={bucket.currency.name}
        character_name={bucket.fullName}
      />
      <Whitdrawals
        geo={bucket.geoCapital}
        currency_simbol={bucket.currency.symbol}
        whitdrawalText={bucket.whitdrawalText}
      />
      <Offerbar
        character_name={bucket.fullName}
        {redirect}
        offer_name={bucket.offers[offer].name}
        offerBarText={bucket.offerBarText}
      />
    {:else}
      <div class={pageStyles.error_container}>
        <img src={Error} alt="Error" class={pageStyles.error_image} />
        <h1 class={pageStyles.error_text}>Sorry!! Page not found</h1>
      </div>
    {/if}
  </section>
</main>
