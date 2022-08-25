<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import TechnologyList from "./components/TechnologyList.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll", "Mobile Technology"];
  let activeItme = "Current Polls";
  const tabChangeEvent = (e) => {
    activeItme = e.detail;
  };
  const handleAppPoll = () => {
    activeItme = "Current Polls";
  };
</script>

<Header class="header" />
<main>
  <Tabs {items} {activeItme} on:tabChange={tabChangeEvent} />
  {#if activeItme === "Current Polls"}
    <PollList />
  {:else if activeItme === "Add New Poll"}
    <CreatePollForm on:addPoll={handleAppPoll} />
  {:else if activeItme === "Mobile Technology"}
    <TechnologyList />
  {/if}
</main>
<Footer class="footer" />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
    padding: 110px 0 80px 0;
  }
</style>
