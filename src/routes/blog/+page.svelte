<script lang="ts">
import { formatDate, getDate, getMonth, getYear } from "$lib/utils";
import * as config from "$lib/config";
export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
  <ul class="">
    {#each data.posts as post}
      <li class="post border-t-1 border-gray-300 mt-10 pt-10">
        <h2 class="text-5xl font-bold mb-2">
          <a href={`/blog/${getYear(post.date)}/${getMonth(post.date)}/${post.slug}`} class="title">{post.title}</a>
        </h2>
        <p class="text-gray-600 text-s mb-4">
          {formatDate(post.date)}
          {getDate(post.date)}
        </p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>