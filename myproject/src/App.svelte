<script>
  import Modal from "./Modal.svelte";
  import AddPerson from "./AddPerson.svelte";

  let showModal = false;
  let firstName = "Girish";
  let lastName = "Narivala";
  let beltColor = "Black";
  let people = [
    { name: "Girish", beltColor: "black", age: 25, id: 1 },
    { name: "Shreyansh", beltColor: "green", age: 30, id: 2 },
    { name: "Dishant", beltColor: "red", age: 35, id: 3 },
    { name: "Rudra", beltColor: "blue", age: 40, id: 4 },
    { name: "Parth", beltColor: "purple", age: 45, id: 5 },
  ];
  $: fullName = `${firstName} ${lastName}`;
  const handleClick = (id) => {
    //   beltColor = "Orange";
    people = people.filter((person) => person.id != id);
  };
  const toggleModal = () => {
    showModal = !showModal;
  };
  const addPerson = (e) => {
    const person = e.detail;
    people = [person, ...people];
    showModal = false;
  };
</script>

<Modal
  message="Hey I am a prop value"
  isPromo={false}
  {showModal}
  on:click={toggleModal}
>
  <AddPerson on:addPerson={addPerson} />
</Modal>
<main>
  <h1>Hello {fullName}!</h1>
  <button on:click={toggleModal}>Open Modal</button>
  <p style="color: {beltColor};">{firstName} {lastName} - {beltColor} belt</p>

  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColor} />
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      <p style="color: gray;">{person.age} years old, {person.beltColor}</p>
      <button on:click={() => handleClick(person.id)}>delete</button>
    </div>
  {:else}
    <p>There are no people to show</p>
  {/each}
</main>
<!-- <button on:click={handleClick}>update beltColor</button> -->

<!-- <input type="text" on:input={handleInput} value={beltColor} /> -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
