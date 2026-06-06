<script lang="ts">
import { formatDate, getMonth, getYear } from "$lib/utils"
import { base } from '$app/paths'
export let data
</script>

<svelte:head>
  <title>{data.category}</title>
</svelte:head>

<!-- Posts -->
<section>
  <h1 class="text-3xl font-bold mb-4">カテゴリー: {data.category}</h1>
  <ul class="">
    {#each data.posts as post}
      <li class="post border-t-1 border-gray-300 mt-10 pt-10">
        <h2 class="text-5xl font-bold mb-2">
          <a href={`${base}/blog/${getYear(post.date)}/${getMonth(post.date)}/${post.slug}`} class="title">
            {post.title}
          </a>
        </h2>
        <p class="text-gray-600 text-s mb-4">
          {formatDate(post.date)}
        </p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>
