<!-- src/routes/blog/+layout.svelte -->
<script>
  export let data;
  import { base } from '$app/paths'
</script>

<aside>
    <ul>
        {#each data.archiveYears as year}
            <li>
                <a href={`${base}/blog/${year}`}>{year}</a>
            </li>
        {/each}
    </ul>
</aside>
<slot />