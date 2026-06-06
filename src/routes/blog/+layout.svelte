<!-- src/routes/blog/+layout.svelte -->
<script>
  export let data;
  import { base } from '$app/paths'
</script>

<aside>
    <p>アーカイブ</p>
    <ul>
        {#each data.archiveYears as year}
            <li>
                <a href={`${base}/blog/${year}`}>{year}</a>
            </li>
        {/each}
    </ul>

    <p>カテゴリー</p>
    <ul>
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

<style>
ul{
    display: flex;
    gap: 20px;
}
</style>