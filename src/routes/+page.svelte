<script>
  import menus from '$lib/menus'
</script>

<div class="mx-auto max-w-xs md:max-w-4xl my-16 text-center space-y-8">
  <div class="mx-w-4xl m-auto prose lg:prose-xl">
    <h1 class="text-6xl font-bold text-red-600">Svelte Box</h1>
  </div>

  <div class="grid grid-cols-4 gap-x-2 example">
    {#each menus as menu}
      <a href={menu.link} class={`${menu.bg ? menu.bg : 'bg-primary-400 hover:bg-primary-500'}`}
        >{menu.name}</a
      >
    {/each}
  </div>
</div>

<style lang="postcss">
  .example a {
    @apply p-4 text-white rounded-md;
  }
</style>
