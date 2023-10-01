<script lang="ts">
  import { writable } from 'svelte/store'
  import { orders, type Order } from '$lib/fixtures/orders'

  import Status from './Status.svelte'

  import { createSvelteTable, flexRender, getCoreRowModel } from '@tanstack/svelte-table'
  import type { ColumnDef, TableOptions } from '@tanstack/table-core/src/types'

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: 'id'
    },
    {
      accessorKey: 'sku'
    },
    {
      accessorKey: 'title',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'description'
    },
    {
      accessorKey: 'quantity'
    },
    {
      accessorKey: 'price',
      cell: (info) =>
        info.getValue<number>().toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    {
      accessorKey: 'status',
      cell: (info) => flexRender(Status, { status: info.getValue<string>() })
    }
  ]

  const options = writable<TableOptions<Order>>({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const rerender = () => {
    options.update((options) => ({
      ...options,
      data: orders
    }))
  }

  const table = createSvelteTable(options)
</script>

<div class="container max-w-5xl mx-auto mt-4">
  <table class="table-auto w-full border-separate border-spacing-y-8 border-2 border-slate-500">
    <thead>
      {#each $table.getHeaderGroups() as headerGroup}
        <tr>
          {#each headerGroup.headers as header}
            <th>
              {#if !header.isPlaceholder}
                <svelte:component
                  this={flexRender(header.column.columnDef.header, header.getContext())}
                />
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </thead>
    <tbody>
      {#each $table.getRowModel().rows as row}
        <tr>
          {#each row.getVisibleCells() as cell}
            <td class="py-2">
              <svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
    <tfoot>
      {#each $table.getFooterGroups() as footerGroup}
        <tr>
          {#each footerGroup.headers as header}
            <th>
              {#if !header.isPlaceholder}
                <svelte:component
                  this={flexRender(header.column.columnDef.footer, header.getContext())}
                />
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </tfoot>
  </table>
  <div class="h-4" />
  <button on:click={() => rerender()} class="border p-2"> Rerender </button>
</div>
