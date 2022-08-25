<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  let fields = { quetion: "", answerA: "", answerB: "" };
  let errors = { quetion: "", answerA: "", answerB: "" };
  let valid = false;
  let dispatch = createEventDispatcher();

  const submitHandler = () => {
    valid = true;
    //validate quetion
    if (fields.quetion.trim().length < 5) {
      valid = false;
      errors.quetion = "Quetion must be at least 5 characters long";
    } else {
      errors.quetion = "";
    }
    //validate answerA
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty";
    } else {
      errors.answerA = "";
    }
    //validate answerB
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B  cannot be empty";
    } else {
      errors.answerB = "";
    }
    //form valid
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      dispatch("addPoll", poll);
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="quetion">Poll Quetion:</label>
    <input type="text" id="quetion" bind:value={fields.quetion} />
    <div class="error">{errors.quetion}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="primary" flat={true} inverse={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: 400;
    color: #d91b42;
    font-size: 12px;
  }
</style>
