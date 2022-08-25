<script>
  import { createEventDispatcher } from "svelte";
  let dispath = createEventDispatcher();

  let name;
  let beltColor;
  let age = 5;
  let skills = [];

  const handleSubmit = () => {
    const person = {
      name,
      beltColor,
      age,
      skills,
      id: Math.random(),
    };
    dispath("addPerson", person);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name} />
  <input type="number" placeholder="age" bind:value={age} />
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Skills:</label>
  <input type="checkbox" bind:group={skills} value="fighting" />fighting<br />
  <input type="checkbox" bind:group={skills} value="sneaking" />sneaking<br />
  <input type="checkbox" bind:group={skills} value="running" />running<br />
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Belt Color:</label>
  <select bind:value={beltColor}>
    <option value="black">Black</option>
    <option value="orange">Orange</option>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="dodgerblue">Dodgerblue</option>
  </select>
  <button>Add person</button>
</form>

<!-- <input type="checkbox" bind:checked={fighting} />fighting<br />
  <input type="checkbox" bind:checked={sneaking} />sneaking<br />
  <input type="checkbox" bind:checked={running} />running<br /> -->
<style>
</style>
