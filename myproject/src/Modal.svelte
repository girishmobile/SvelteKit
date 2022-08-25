<script>
  export let message = "default value";
  export let showModal = true;
  export let isPromo = false;
  const handleClick = () => {};
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
      <slot />
    </div>
  </div>
{/if}
<main />

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10px auto;
    text-align: center;
    background: white;
  }
  .promo .modal {
    background: crimson;
    color: white;
  }
</style>
