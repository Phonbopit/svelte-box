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
  <div class="container max-w-4xl mx-auto py-4">
    <ul class="flex space-x-4">
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
  </div>
</nav>

<div class="container mx-auto max-w-xs md:max-w-4xl my-12 text-center space-y-8">
  <slot />
</div>

<style>
  .active {
    @apply underline underline-offset-2 decoration-wavy decoration-primary-500 text-primary-500;
  }
</style>
