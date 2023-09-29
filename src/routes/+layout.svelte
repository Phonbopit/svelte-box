<script lang="ts">
  import type { Page } from '@sveltejs/kit'
  import { page } from '$app/stores'

  import menus from '$lib/menus'

  import '@fontsource/fredoka-one'
  import '../styles/app.css'

  function isActive(page: Page<Record<string, string>>, path: string) {
    const pathname = page.url.pathname
    return pathname === path
  }
</script>

<svelte:head>
  <title>Svelte Box | My Svelte Learning Journey</title>
  <meta name="description" content="Learning & Experimenting with Svelte/SvelteKit" />
</svelte:head>

<nav class="navbar">
  <div class="container max-w-8xl mx-auto p-4 flex justify-between items-center">
    <ul class="flex space-x-4">
      <li><a href="/" class:active={isActive($page, '/')}>Home</a></li>
      {#each menus as menu}
        <li>
          <a
            href={menu.link}
            class="py-2 px-4 hover:underline decoration-wavy decoration-primary-500"
            class:active={isActive($page, menu.link)}>{menu.name}</a
          >
        </li>
      {/each}
    </ul>

    <div>
      <a
        href="https://github.com/phonbopit/svelte-box"
        class="hover:text-primary-500"
        target="_blank"
        rel="noopener"
      >
        <!-- lucide github : https://lucide.dev/icons/github -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
          ><path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          /><path d="M9 18c-4.51 2-5-2-7-2" /></svg
        >
      </a>
    </div>
  </div>
</nav>

<div class="container mx-auto max-w-xs md:max-w-4xl my-12 text-center">
  <slot />
</div>

<style>
  .active {
    @apply underline underline-offset-2 decoration-wavy decoration-primary-500 text-primary-500;
  }
</style>
