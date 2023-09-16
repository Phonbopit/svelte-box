<script lang="ts">
  export let name: string

  export let bg = 'bg-red-400'
</script>

<div
  class={`flex justify-center items-center w-24 h-24 md:w-48 md:h-48 aspect-square ${bg} rounded-xl shadow-xl text-white`}
>
  {name}
</div>
