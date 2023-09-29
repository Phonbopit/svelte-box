<script lang="ts">
  import { animate } from 'motion'

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

  function scale(id: string) {
    animate(
      id,
      { scale: 2 },
      {
        duration: 0.5,
        direction: 'alternate'
      }
    )
  }
</script>

<h1 class="text-6xl font-bold text-red-600 mb-4">Motion One</h1>

<div class="grid grid-cols-6">
  <div
    id="box1"
    class="box"
    on:mouseover={() => rotate('#box1')}
    on:focus={() => rotate('#box1')}
    role="img"
  ></div>

  <div
    id="box2"
    class="box"
    role="img"
    on:mouseover={() => scale('#box2')}
    on:focus={() => rotate('#box2')}
  ></div>

  <button id="button1" on:click={() => rotate('#button1')}>Click me!</button>
</div>

<style lang="postcss">
  .box {
    @apply w-32 h-32 bg-teal-400 rounded;
  }
</style>
