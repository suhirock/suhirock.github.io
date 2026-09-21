<!-- src/routes/blog/+layout.svelte -->
<script>
  export let data;
  import { base } from '$app/paths'
</script>

<aside>
    <p>アーカイブ</p>
    <ul class="flex flex-wrap gap-x-4 mb-5">
        {#each data.archiveYears as year}
            <li>
                <a href={`${base}/blog/${year}`}>{year}</a>
            </li>
        {/each}
    </ul>

    <p>カテゴリー</p>
    <ul class="flex flex-wrap gap-x-4 mb-10">
        {#each data.categories as category}
            <li>
                <a href={`${base}/blog/category/${encodeURIComponent(category.name)}`}>
                    {category.name} ({category.count})
                </a>
            </li>
        {/each}
    </ul>
</aside>
<slot />