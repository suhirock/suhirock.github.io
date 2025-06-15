<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import '../app.css';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
</script>

<div class="layout">
	<Header />
	<GoogleAnalytics id="G-NN1RDH0627" />

	<slot></slot>

	<Footer />
</div>