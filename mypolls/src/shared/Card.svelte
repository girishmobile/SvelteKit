<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let item;
</script>

<div class="card" on:click={() => dispatch("CardPressed")}>
  <slot />
</div>

<style>
  .card {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .card:hover {
    scale: 1.01;
  }
</style>
