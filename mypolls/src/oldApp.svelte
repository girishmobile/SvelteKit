<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll", "List of Polls"];
  let activeItme = "Current Polls";
  const tabChangeEvent = (e) => {
    activeItme = e.detail;
  };
  //polls
  let polls = [
    {
      id: 1,
      quetion: "Python or Java",
      answerA: "Python",
      answerB: "Java",
      votesA: 9,
      votesB: 15,
    },
  ];
  const handleAppPoll = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItme = "Current Polls";
  };
  const handleVote = (e) => {
    const { id, option } = e.detail;
    console.log(id, option);
    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
    if (option === "a") {
      upvotedPoll.votesA++;
    }
    if (option === "b") {
      upvotedPoll.votesB++;
    }
    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItme} on:tabChange={tabChangeEvent} />
  {#if activeItme === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItme === "Add New Poll"}
    <CreatePollForm on:addPoll={handleAppPoll} />
  {:else if activeItme === "List of Polls"}
    <p>List of polls here...</p>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
