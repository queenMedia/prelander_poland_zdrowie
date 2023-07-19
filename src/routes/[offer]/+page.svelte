<script lang="ts">
  import { onMount } from 'svelte';

	import { page as pageStyles } from "@home/styles";
	import { i18n } from "@stores";
	import { page } from "$app/stores";

	import { SEO } from "@sharing/atoms";
	import { Content, Sidebar } from "@home/organisms";

	import Error from "@icons/error.png";
    import { string } from 'yup';

	let pageExist: boolean = false;
	type StringObject = {
  [key: string]: string;
};
	const offers: StringObject = {
		"bitGptApp": "bit_gpt_app",
		"bitcoin360Ai": "bitcoin_360_ai",
		"bitcoinCode": "bitcoin_code",
		"bitcoinEra": "bitcoin_era",
		"bitsoft360": "bitsoft_360",
		"immediateEdge": "immediate_edge",
		"quantumAi": "quantum_ai"
	};

	onMount(() => {
			pageExist = Object.keys(offers).includes($page.params.offer);
	});
</script>

<SEO title={$i18n.t("home:seo-title")} description="Ditto Svelte" />

<section class={pageStyles.section}>
	{#if pageExist}
		<Content offer_name={offers[$page.params.offer]} />
		<Sidebar offer_name={offers[$page.params.offer]} />
	{:else}
		<div class={pageStyles.error_container}>
			<img src={Error} alt="Error" class={pageStyles.error_image}>
			<h1 class={pageStyles.error_text}>
				Sorry!! Page not found 
			</h1>
		</div>
		
	{/if}
</section>