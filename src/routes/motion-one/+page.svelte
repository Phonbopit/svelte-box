<script lang="ts">
  import { animate, timeline, stagger } from 'motion'
  import { onMount } from 'svelte'

  function combo(id: string) {
    timeline([
      [
        id,
        {
          transform: ['translateX(-100px) translateY(-100px) rotate(360deg) scale(2)']
        },
        { duration: 1 }
      ],
      [id, { transform: 'none' }, { duration: 0.5, delay: 1 }]
    ])
  }

  function rotate(id: string) {
    animate(
      id,
      { transform: 'rotate(45deg)' },
      {
        duration: 0.5,
        direction: 'alternate'
      }
    )
  }

  function rotateBack(id: string) {
    animate(
      id,
      { transform: 'rotate(0deg)' },
      {
        duration: 0.5
      }
    )
  }

  function scale(id: string) {
    animate(
      id,
      { scale: 2 },
      {
        duration: 0.5
      }
    )
  }

  function scaleBack(id: string) {
    animate(
      id,
      { scale: 1 },
      {
        duration: 0.5
      }
    )
  }

  onMount(() => {
    animate(
      '.item',
      { x: [0, 0, -1000, 0, 0, 0] },
      { delay: stagger(0.1), duration: 5, repeat: Infinity }
    )
  })
</script>

<h1 class="text-6xl font-bold text-violet-400 mb-12">Motion One</h1>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="grid grid-cols-6">
  <div
    id="box1"
    class="box"
    on:mouseover={() => rotate('#box1')}
    on:mouseleave={() => rotateBack('#box1')}
    role="presentation"
  >
    Box 1
  </div>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    id="box2"
    class="box"
    role="presentation"
    on:mouseover={() => scale('#box2')}
    on:mouseleave={() => scaleBack('#box2')}
  >
    Box 2
  </div>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    id="box3"
    class="box"
    on:mouseover={() =>
      animate('#box3', { transform: ['translateY(-20px)', 'none'] }, { duration: 1 })}
    role="presentation"
  >
    Box 3
  </div>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div id="box4" class="box" on:mouseover={() => combo('#box4')} role="presentation">Box 4</div>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    id="box5"
    class="box"
    role="presentation"
    on:mouseover={() =>
      animate(
        '#box5',
        { x: [0, -100, 100, 0] },
        {
          duration: 2,
          offset: [0, 0.25, 0.75]
        }
      )}
  >
    Box 5
  </div>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    id="box6"
    class="box"
    role="presentation"
    on:mouseover={() =>
      animate(
        '#box6',
        { y: [0, -50, 50, 0] },
        {
          duration: 1,
          offset: [0, 0.25, 0.75]
        }
      )}
  >
    Box 6
  </div>
</div>

<section class="my-32 mx-auto overflow-x-hidden">
  <div id="cards" class="flex">
    <div class="item bg-red-400"></div>
    <div class="item bg-blue-400"></div>
    <div class="item bg-green-400"></div>
    <div class="item bg-yellow-400"></div>
    <div class="item bg-teal-400"></div>
    <div class="item bg-pink-400"></div>
    <div class="item bg-amber-400"></div>
    <div class="item bg-orange-400"></div>
    <div class="item bg-emerald-400"></div>
  </div>
</section>

<style lang="postcss">
  .box {
    @apply w-32 h-32 bg-violet-400 rounded flex items-center justify-center text-white;
  }

  .item {
    @apply h-32 w-24 mr-4 rounded;
  }
</style>
