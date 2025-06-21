<script lang="ts">
    import { getYears } from "$lib/api/posts"
    import { base } from '$app/paths'

    const years = getYears()
</script>

<ul>
    {#each years as year}
        <li>
            <a href="{base}/blog/{year}">{year}</a>
        </li>
    {/each}
</ul>