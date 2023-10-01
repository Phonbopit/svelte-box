<script>
  import menus from '$lib/menus'
</script>

<div class="mx-auto my-16 max-w-xs space-y-8 text-center md:max-w-4xl">
  <div class="mx-w-4xl prose m-auto lg:prose-xl">
    <h1 class="text-6xl font-bold text-red-600">Svelte Box</h1>
  </div>

  <div class="example grid grid-cols-4 gap-x-2">
    {#each menus as menu}
      <a href={menu.link} class={`${menu.bg ? menu.bg : 'bg-primary-400 hover:bg-primary-500'}`}
        >{menu.name}</a
      >
    {/each}
  </div>
</div>

<style lang="postcss">
  .example a {
    @apply rounded-md p-4 text-white;
  }
</style>
