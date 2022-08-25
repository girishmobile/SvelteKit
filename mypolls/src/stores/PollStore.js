import { writable } from "svelte/store";
const PollStore = writable([
    {
        id: 1,
        quetion: "Python or Java",
        answerA: "Python",
        answerB: "Java",
        votesA: 9,
        votesB: 15,
    },
    {
        id: 2,
        quetion: "Mobile development",
        answerA: "iOS",
        answerB: "Android",
        votesA: 7,
        votesB: 17,
    },
]);
export default PollStore;