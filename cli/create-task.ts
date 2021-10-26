import * as inquirer from "inquirer";
import * as fs from "fs";
import * as path from "path";
import messages from "./templates/messages";
import defaultTaskTemplate from "./templates/task-template";

const questions = [
  {
    name: "difficulty",
    type: "list",
    message: "What is the difficulty of this task?",
    choices: [...Array(9).keys()]
      .slice(1)
      .reverse()
      .map((difficulty) => `${difficulty}-kyu`),
  },
  {
    name: "taskName",
    type: "input",
    message: "Task name:",
  },
];

inquirer.prompt(questions).then(async ({ taskName, difficulty }) => {
  const folderPath = path.join(__dirname, `../solutions/${difficulty}`);
  const filePath = `${folderPath}/${taskName}.ts`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(messages.folderCreated);
  }

  fs.writeFile(filePath, defaultTaskTemplate, (error) => {
    if (error) throw error;
    console.log(messages.fileCreated);
  });
});
