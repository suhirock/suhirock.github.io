<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer class="mt-10">
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer{
		p{
			font-size: 10px;
		}
	}
</style>