import * as inquirer from "inquirer";
import * as colors from "colors";
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

const messages = {
  yourCommitIs: `Your commit message is:`,
  doingCommit: colors.yellow("Doing commit..."),
  commitIsDone: colors.green("Commit is done!"),
};

inquirer
  .prompt(questions)
  .then(async ({ taskName, difficulty, isCommitNeeded }) => {
    const message = colors.bold.cyan(
      `feat(${difficulty}-kyu): resolve \`${taskName}\` kata`
    );

    console.log(`${messages.yourCommitIs} ${message}`);

    if (isCommitNeeded) {
      console.log(messages.doingCommit);
      await git.add(".");
      await git.commit(message);
      console.log(messages.commitIsDone);
    }
  });
