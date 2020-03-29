<script>
  export let heroes = [];
</script>
{#if !heroes.length}
  <p>There are no heroes.</p>
{/if}
