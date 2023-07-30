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

  let page_exist: boolean = false;
  let character_exists: boolean = false;
  let redirect: any;
  let loading = true;

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
    const character = new URLSearchParams(window.location.search).get("character");
    const offer = new URLSearchParams(window.location.search).get("offer");
    const [bucket, objectLink] = await Promise.all([
      getConfig(character || ""),
      getLinkUrl($page.url.origin)
    ]);
    console.log({bucket,objectLink})
    redirect = Object.keys(objectLink).includes("LINK") ? objectLink.LINK : null;
    page_exist = Object.keys(bucket.offers).includes(offer || "");
    character_exists = bucket.character.fullName ? true : false;
    loading = page_exist && character_exists;
  });
</script>

<Header />

<main class={layout.main}>
  <section class={pageStyles.section}>
    {#if $page.params.offer}
      <Content offer_name={offers[$page.params.offer]} />
      <Sidebar offer_name={offers[$page.params.offer]} />
      <Modal
        offer={offers[$page.params.offer]}
        type="modal"
        title="title"
        subtitle="subtitle"
        button_text="button"
      />
      <Offerbar />
    {:else}
      <div class={pageStyles.error_container}>
        <img src={Error} alt="Error" class={pageStyles.error_image} />
        <h1 class={pageStyles.error_text}>Sorry!! Page not found</h1>
      </div>
    {/if}
  </section>
</main>
