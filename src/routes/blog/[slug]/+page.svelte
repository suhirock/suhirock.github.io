<script lang="ts">import { formatDate } from "$lib/utils";
export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1 class="text-3xl font-bold mb-4 flex gap-4 items-baseline">
      {data.meta.title}<small class="text-sm text-gray-500">{formatDate(data.meta.date)}</small>
    </h1>
  </hgroup>

  <div class="tags flex flex-wrap gap-2 mb-4">
    {#each data.meta.tags as tag}
      <a
        href={`/tags/${tag}`}
        class="bg-white text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-white border border-gray-500"
        >&num;{tag}</a
      >
    {/each}
  </div>

  <div class="prose max-w-full">
    <svelte:component this={data.content} />
  </div>
</article>