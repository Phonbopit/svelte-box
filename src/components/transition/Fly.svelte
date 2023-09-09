<script lang="ts">
  import { fly, type FlyParams } from 'svelte/transition'
  import EmptyBox from './EmptyBox.svelte'

  export let duration: number
  export let options: FlyParams = { y: 100 }

  let params = { ...options, duration }
</script>

<div transition:fly={{ ...params }}>
  <EmptyBox name="Fly" />
</div>
