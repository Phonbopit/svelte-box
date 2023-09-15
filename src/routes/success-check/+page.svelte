<script>
  import { draw, scale } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  let visible = true

  function play() {
    visible = false
    setTimeout(() => {
      visible = true
    }, 1000)
  }
</script>

<h1 class="text-6xl font-bold text-red-600 mb-4">Success Check ✅</h1>

<p class="text-primary-500 text-2xl">Work in progress...........</p>

<div class="frame">
  {#if visible}
    <div class="circle" in:scale={{ duration: 700, easing: quintOut }}>
      <!-- Check svg from https://heroicons.com/ -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="white"
        class="w-6 h-6"
      >
        <path
          in:draw={{ duration: 500, delay: 200 }}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.5l6 6 9-11.5"
        />
      </svg>
    </div>
  {/if}
  <button
    on:click={play}
    class="absolute right-2 bottom-2 px-8 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-xl"
    >Play</button
  >
</div>

<p>
  Credit : <a
    href="https://lottiefiles.com/animations/success-check-fill-fpiuzfu9hy-VElzIXLoyJ"
    target="_blank"
    rel="noopener"
    class="hover:text-secondary-500 text-secondary-400 underline underline-offset-2 decoration-2"
    >Lottie - success-check-fill-FPiuzFU9Hy</a
  >
</p>

<style lang="postcss">
  .frame {
    @apply flex flex-col justify-center items-center h-[30rem] w-full bg-slate-50 relative my-10;
  }

  .circle {
    @apply w-48 h-48 relative p-4 rounded-full bg-green-500;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    opacity: 1;
  }
</style>
