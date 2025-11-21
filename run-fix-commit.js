// run-fix-commit.js
import { spawnSync } from "child_process";

const commitMsgFile = process.argv[2];
const result = spawnSync("node", ["fix-commit.js", commitMsgFile], {
  stdio: "inherit",
  shell: true, // ensures Windows TTY works
});

process.exit(result.status);
