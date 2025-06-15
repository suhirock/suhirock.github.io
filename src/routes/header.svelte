<script lang="ts">
	import * as config from '$lib/config'
	import { base } from '$app/paths'
</script>

<h1>LOGデナシ</h1>

<nav>
<a href="{base}/">Home</a>
<a href="{base}/blog">Blog</a>
</nav>

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