<script lang="ts">
  import { browser } from '$app/environment';
  export let id: string;

  if (browser) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){window.dataLayer.push(arguments);};
    window.gtag("js", new Date());
    window.gtag("config", id);
  }
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
</svelte:head>
