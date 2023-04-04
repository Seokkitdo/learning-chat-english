<script lang="ts">
  import Item from './Item.svelte'

  export let navItems: any
</script>

<nav class="h-full flex items-stretch gap-2">
  {#each navItems as navItem}
    <Item data={navItem} />
  {/each}
</nav>
