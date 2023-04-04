<script lang="ts">
  import { navigate, useLocation } from 'svelte-navigator'

  const location = useLocation()

  export let data: any

  let isCurrentPage: boolean

  $: isCurrentPage = $location.pathname === data.pathname
</script>

<button
  class="relative flex items-center justify-center px-6 text-xl overflow-hidden"
  class:font-bold={isCurrentPage}
  on:click={() => {
    navigate(data.pathname)
  }}
  >{data.name}
  <div
    class="absolute right-0 left-0 bottom-px h-1 bg-white"
    class:-translate-x-full={!isCurrentPage}
    class:translate-x-0={isCurrentPage} />
</button>
