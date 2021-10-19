import * as inquirer from "inquirer";
import simpleGit, { SimpleGit } from "simple-git";
const git: SimpleGit = simpleGit();

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
  const message = `feat(${difficulty}): resolve \`${taskName}\` kata`;

  await git.add(".");
  await git.commit(message);
});