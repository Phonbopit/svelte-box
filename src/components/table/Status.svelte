<script lang="ts">
  export let status = 'pending'

  let color = getColor(status)

  function getColor(status: string) {
    switch (status) {
      case 'pending':
        return `text-yellow-500`
      case 'shipped':
        return `text-green-500`
      case 'delivered':
        return `text-blue-500`
      case 'cancelled':
        return `text-red-500`
      default:
        return `text-gray-500`
    }
  }
</script>

<span class={color}>{status.toUpperCase()}</span>
