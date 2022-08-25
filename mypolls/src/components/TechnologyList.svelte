<script>
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import TechnologyStore from "../stores/TechnologyStore";
  import TechnologyDetail from "./TechnologyDetail.svelte";
</script>

<div class="tech-list">
  {#each $TechnologyStore as technology (technology.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 1000 }}>
      <TechnologyDetail {technology} />
    </div>
  {/each}
</div>

<style>
  .tech-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
