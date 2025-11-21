export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [0], // 0 = turn off
    "subject-empty": [0], // 0 = turn off
    "header-max-length": [2, "always", 100], // optional: customize max length
  },
};
