<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<h1>LOGデナシ</h1>

<nav>
<a href="/">Home</a>
<a href="/blog">Blog</a>
</nav>

{@render children()}

<style>
	h1{
		font-size: 10rem;
		font-weight: bold;
	}
	nav{
		display: flex;
		gap: 2rem;
		font-weight: bold;
		letter-spacing: .2rem;
	}
</style>