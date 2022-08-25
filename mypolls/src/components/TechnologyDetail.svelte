<script>
  import Card from "../shared/Card.svelte";
  export let technology;
  const technologySelected = (e) => {
    console.log("event", e);
  };
</script>

<Card on:CardPressed={technologySelected}>
  <div class="main">
    <h3>{technology.quetion}</h3>
    <div class="image">
      <img src="./img/{technology.quetion}.png" alt="My App Logo" />
    </div>
  </div>
</Card>

<style>
  .main {
    text-align: center;
  }
  .image {
    padding: 30px;
  }
  img {
    height: 110px;
    width: 110px;
    filter: opacity(0.5) drop-shadow(0 0 0 rgb(50, 177, 105));
  }
</style>
