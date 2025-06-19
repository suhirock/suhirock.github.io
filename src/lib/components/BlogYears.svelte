<script lang="ts">
    import { onMount } from "svelte"
    let data = null
    let isLoading = true

    onMount(async() => {
        const res = await fetch(`${base}/api/posts_years`)
        data = await res.json()
        isLoading = false
    })
</script>

<ul>
    <li>2025</li>
</ul>