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

console.log("Allowed commit types:");
types.forEach((type) => console.log(`- ${type}`));
