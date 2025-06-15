<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import '../app.css';

	let { children } = $props();
</script>

<div class="layout">
	<Header />

	{@render children()}

	<Footer />
</div>