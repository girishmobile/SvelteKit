import { writable } from "svelte/store";

const TechnologyStore = writable([
    {
        id: 1,
        quetion: "iOS",
        answerA: "Swift",
        answerB: "Objective C",
        votesA: 40,
        votesB: 60,
    },
    {
        id: 2,
        quetion: "Android",
        answerA: "Java",
        answerB: "Kotlin",
        votesA: 35,
        votesB: 65,
    },
    {
        id: 3,
        quetion: "ReactJS",
        answerA: "React Native",
        answerB: "Flutter",
        votesA: 45,
        votesB: 55,
    },
    {
        id: 4,
        quetion: "Web",
        answerA: "ReactJS",
        answerB: "Redux",
        votesA: 30,
        votesB: 70,
    },
    {
        id: 5,
        quetion: "Flutter",
        answerA: "NodeJS",
        answerB: "PHP",
        votesA: 35,
        votesB: 65,
    },
    {
        id: 6,
        quetion: "Javascript",
        answerA: "NodeJS",
        answerB: "PHP",
        votesA: 35,
        votesB: 65,
    },
]);
export default TechnologyStore;