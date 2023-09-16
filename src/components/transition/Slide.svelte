<script lang="ts">
  import { slide } from 'svelte/transition'
  import EmptyBox from './EmptyBox.svelte'

  export let duration: number
  export let axis: 'x' | 'y' = 'y'
</script>

<div transition:slide={{ duration, axis }}>
  <EmptyBox name="Slide" bg="bg-cyan-500" />
</div>
