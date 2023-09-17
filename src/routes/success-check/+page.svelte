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

  function slideLine(node, { delay = 300, duration = 300, opacity = 1, rotate = 0 }) {
    return {
      delay,
      duration,
      css: (t, u) => {
        const eased = quintOut(u)
        return `
          opacity: ${t * opacity};
          transform: rotate(${rotate}deg) translate(${(1 - eased) * -0}px, ${(1 - eased) * -50}px);
        `
      }
    }
  }

  function fadeOut(node, { delay = 0, duration = 300, opacity = 1 }) {
    return {
      delay,
      duration,
      css: (t, u) => {
        const eased = quintOut(u)

        return `
          opacity: ${t * opacity};
          transform: translate(${(1 - eased) * 25}px, ${(1 - eased) * -25}px);
        `
      }
    }
  }
</script>

<h1 class="text-6xl font-bold text-red-600 mb-4">Success Check ✅</h1>

<div class="frame">
  {#if visible}
    <div class="outer-circle">
      <div class="circle" in:scale={{ duration: 500, easing: quintOut }}>
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
            in:draw={{ duration: 300, delay: 200 }}
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.5l6 6 9-11.5"
          />
        </svg>

        <div class="bubbles">
          <span class="bubble" in:fadeOut={{ delay: 500 }}></span>
          <span class="bubble" in:fadeOut={{ delay: 500 }}></span>
          <span class="bubble" in:fadeOut={{ delay: 500 }}></span>
        </div>
      </div>

      <span class="line one" in:slideLine={{ rotate: 0 }}></span>
      <span class="line two" in:slideLine={{ rotate: 45 }}></span>
      <span class="line three" in:slideLine={{ rotate: 90 }}> </span>
      <span class="line four" in:slideLine={{ rotate: 135 }}></span>
      <span class="line five" in:slideLine={{ rotate: 180 }}> </span>
      <span class="line six" in:slideLine={{ rotate: 225 }}></span>
      <span class="line seven" in:slideLine={{ rotate: 270 }}></span>
      <span class="line eight" in:slideLine={{ rotate: 315 }}></span>
    </div>
  {/if}
  <button
    on:click={play}
    class="absolute right-4 bottom-4 px-8 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-xl"
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
    @apply flex flex-col justify-center items-center h-[30rem] w-full bg-slate-100 relative my-10;
  }

  .outer-circle {
    @apply relative w-72 h-72 flex justify-center items-center;
  }

  .circle {
    @apply w-52 h-52 relative p-4 rounded-full bg-green-500;
  }

  .bubbles {
    @apply absolute w-12 h-12 flex justify-center items-center top-6 right-2;
  }

  .bubble {
    @apply w-3 h-3 bg-white rounded-full opacity-0;
  }

  .bubble:first-child {
    @apply absolute top-0 left-0;
  }

  .bubble:nth-child(2) {
    @apply absolute top-1 right-2 w-5 h-5;
  }

  .bubble:nth-child(3) {
    @apply absolute top-7 right-0;
  }

  .line {
    @apply w-3 h-10 bg-green-500 rounded-md absolute opacity-0;
  }

  .line.one {
    @apply -top-4;
  }

  .line.two {
    @apply top-4 right-8;
  }

  .line.three {
    @apply right-0 top-[45%];
  }

  .line.four {
    @apply bottom-4 right-8;
  }

  .line.five {
    @apply -bottom-4;
  }

  .line.six {
    @apply bottom-4 left-8;
  }

  .line.seven {
    @apply left-0 top-[45%];
  }

  .line.eight {
    @apply left-8 top-4;
  }

  svg {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  path {
    opacity: 1;
  }
</style>
