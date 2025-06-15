<script lang="ts">
import { formatDate } from "$lib/utils"
import { base } from '$app/paths'
export let data
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mt-20">
  <hgroup>
    <h1 class="text-5xl font-bold mb-4 flex gap-4 items-baseline">
      {data.meta.title}
    </h1>
    <small class="text-lx">{formatDate(data.meta.date)}</small>
  </hgroup>

  <div class="tags flex flex-wrap gap-2 mb-4 mt-10">
    {#each data.meta.tags as tag}
      <a
        href={`${base}/tags/${tag}`}
        class="bg-white text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-white border border-gray-500"
        >&num;{tag}</a
      >
    {/each}
  </div>

  <div class="prose max-w-full">
    <svelte:component this={data.content} />
  </div>
</article>