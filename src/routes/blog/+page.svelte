<script lang="ts">import { formatDate } from "$lib/utils";
import * as config from "$lib/config";
export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
  <ul class="grid sm:grid-cols-1 md:grid-cols-3">
    {#each data.posts as post}
      <li class="post">
        <h2 class="text-3xl font-bold mb-2">
          <a href={`/blog/${post.slug}`} class="title">{post.title}</a>
        </h2>
        <p class="text-gray-600 text-sm mb-4">{formatDate(post.date)}</p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>