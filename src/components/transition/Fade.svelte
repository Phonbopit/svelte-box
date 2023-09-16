<script lang="ts">
  import { fade } from 'svelte/transition'
  import EmptyBox from './EmptyBox.svelte'

  export let duration: number
</script>

<div transition:fade={{ duration }}>
  <EmptyBox name="Fade" bg="bg-blue-500" />
</div>
