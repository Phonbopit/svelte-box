<script lang="ts">
  export let name: string

  export let bg = 'bg-red-400'
</script>

<div
  class={`flex aspect-square h-24 w-24 items-center justify-center md:h-48 md:w-48 ${bg} rounded-xl text-white shadow-xl`}
>
  {name}
</div>
