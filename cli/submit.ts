import * as inquirer from "inquirer";
import * as colors from "colors";
import messages from "./templates/messages";

import simpleGit, { SimpleGit } from "simple-git";

const git: SimpleGit = simpleGit();

const questions = [
  {
    name: "difficulty",
    type: "input",
    message: "What is the difficulty of this task?",
  },
  {
    name: "taskName",
    type: "input",
    message: "Task name:",
  },
  {
    name: "isCommitNeeded",
    type: "confirm",
    message: "Do you want to commit?",
  },
];

inquirer
  .prompt(questions)
  .then(async ({ taskName, difficulty, isCommitNeeded }) => {
    const message = `feat(${difficulty}-kyu): resolve \`${taskName}\` kata`;

    console.log(`${messages.yourCommitIs} ${colors.cyan(message)}`);

    if (isCommitNeeded) {
      console.log(messages.doingCommit);
      await git.add(".");
      await git.commit(message);
      console.log(messages.commitIsDone);
    }
  });
