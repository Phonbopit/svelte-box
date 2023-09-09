<script lang="ts">
  import { blur } from 'svelte/transition'
  import EmptyBox from './EmptyBox.svelte'

  export let duration: number
</script>

<div transition:blur={{ duration, amount: 100 }}>
  <EmptyBox name="Blur" />
</div>
