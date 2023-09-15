<script>
  import Fade from '$components/transition/Fade.svelte'
  import Blur from '$components/transition/Blur.svelte'
  import Slide from '$components/transition/Slide.svelte'
  import Fly from '$components/transition/Fly.svelte'
  import Scale from '$components/transition/Scale.svelte'

  let animated = true
  let duration = 500
</script>

<div class="mx-auto max-w-xs md:max-w-4xl my-12 text-center space-y-8">
  <div class="mx-w-4xl m-auto prose lg:prose-xl">
    <h1 class="text-6xl font-bold text-red-600">Svelte Transitions</h1>
  </div>

  <div class="block text-left mx-auto max-w-xs space-y-2">
    <div>
      <input type="checkbox" bind:checked={animated} />
      <span class="ml-2">Toggle</span>
    </div>

    <div>
      <input
        type="number"
        step="500"
        bind:value={duration}
        class="w-16 p-1 text-sm"
        name="duration"
      />
      <label for="duration">Duration (ms)</label>
    </div>
  </div>

  {#if animated}
    <div class="grid grid-cols-3 md:grid-cols-4 gap-y-4 md:gap-y-8">
      <Fade {duration} />
      <Blur {duration} />
      <Slide {duration} axis="x" />
      <Slide {duration} />

      <Fly {duration} />
      <Fly {duration} options={{ y: -100 }} />
      <Fly {duration} options={{ x: -100 }} />

      <Scale {duration} />
    </div>
  {/if}
</div>
