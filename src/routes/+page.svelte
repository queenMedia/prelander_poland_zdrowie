<script lang="ts">
	import { page } from "@home/styles";
	import { i18n } from "@stores";

	import { SEO } from "@sharing/atoms";
	import { Content, Sidebar } from "@home/organisms";
</script>

<SEO title={$i18n.t("home:seo-title")} description="Ditto Svelte" />

<section class={page.section}>
	<Content offer_name="" />
	<Sidebar offer_name="" />
</section>