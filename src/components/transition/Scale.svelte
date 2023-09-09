<script lang="ts">
  import { scale } from 'svelte/transition'
  import EmptyBox from './EmptyBox.svelte'

  export let duration: number
</script>

<div transition:scale={{ duration }}>
  <EmptyBox name="Scale" />
</div>
