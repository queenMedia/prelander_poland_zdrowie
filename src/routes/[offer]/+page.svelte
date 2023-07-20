<script lang="ts">
	import { onMount } from 'svelte';

	import { page as pageStyles } from "@home/styles";
	import { i18n } from "@stores";
	import { page } from "$app/stores";

	import { SEO } from "@sharing/atoms";
	import { Content, Sidebar } from "@home/organisms";
	import {offers} from "@utils/constants";

	import Error from "@icons/error.png";

	import Modal from '../../ui/sharing/molecules/Modal/Modal.svelte';
	import { Offerbar } from '@sharing/molecules';

	let pageExist: boolean = false;

	onMount(async () => {
		pageExist = Object.keys(offers).includes($page.params.offer);
	});
</script>

<SEO title={$i18n.t("home:seo-title")} description="Ditto Svelte" />

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
			<img src={Error} alt="Error" class={pageStyles.error_image}>
			<h1 class={pageStyles.error_text}>
				Sorry!! Page not found 
			</h1>
		</div>
	{/if}
</section>
