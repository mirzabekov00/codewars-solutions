import * as inquirer from "inquirer";

const questions = [
  {
    name: "difficulty",
    type: "list",
    message: "What is the difficulty of this task?",
    choices: [...Array(9).keys()]
      .slice(1)
      .map((difficulty) => `${difficulty}-kyu`),
  },
  {
    name: "taskName",
    type: "input",
    message: "Task name:",
  },
];

inquirer.prompt(questions).then(async ({ taskName, difficulty }) => {
  console.log(`feat(${difficulty}): resolve \`${taskName}\` kata`);
});
