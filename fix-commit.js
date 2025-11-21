#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "fs";
import prompts from "prompts";

// Allowed commit types
const types = [
  "build",
  "ci",
  "chore",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];

// Commit message file path (passed by Husky)
const commitMsgFile = process.argv[2];

if (!commitMsgFile) {
  console.error("Error: commit message file path not provided.");
  process.exit(1);
}

// Read current commit message
let commitMsg = fs.readFileSync(commitMsgFile, "utf-8").trim();

// Check if commit message is already valid
const isValid = new RegExp(`^(${types.join("|")}):`).test(commitMsg);
if (isValid) {
  console.log("✅ Commit message is valid.");
  process.exit(0);
}

// Interactive prompts to fix commit
(async () => {
  try {
    const typeAnswer = await prompts({
      type: "select",
      name: "type",
      message: "Select commit type:",
      choices: types.map((t) => ({ title: t, value: t })),
    });

    const descriptionAnswer = await prompts({
      type: "text",
      name: "description",
      message: "Enter commit description:",
      initial: commitMsg.replace(/^.*?:\s*/, ""), // remove old type if present
    });

    if (!typeAnswer.type || !descriptionAnswer.description) {
      console.log("❌ Commit canceled.");
      process.exit(1);
    }

    const newMessage = `${typeAnswer.type}: ${descriptionAnswer.description}`;
    fs.writeFileSync(commitMsgFile, newMessage);

    console.log("✅ Commit message updated!");
  } catch (err) {
    console.log("❌ Commit fix failed.");
    console.log(err);
    process.exit(1);
  }
})();
