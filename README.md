# Complete Husky, Prettier, ESLint setup

## Husky Setup

- Follow the updated docs: [Husky docs](https://typicode.github.io/husky/get-started.html)

```md
I am using pnpm as package manager.
You can use whatever you want
either be pnpm, npm, bun or yarn

Just replace pnpm with your package manager
```

First instally Husky

```js
//npm
npm i husky --save-dev

//pnpm
pnpm i husky --save-dev
```

Run the init command

```Js
pnpm husky init
//it will add "prepare": "husky" in your package.json
```

OR

Just run this one command

```js
pnpm dlx husky init
```

Now goto .hustky/pre-commit and add your custom script for it

```js
pnpm pre-commit
```

Now link pre-commit to lint in package.json

```js
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "prepare": "husky", //husky
    "pre-commit": "pnpm lint"  //calls pnpm lint
  },
```

### Boom 💥 Husky setup is completed

## ESLint Setup - Comes by default with Next.js and React

- Follow the updated docs: [ESLint docs](https://eslint.org/docs/latest/use/getting-started)

### Also define some rules to your eslint.config.mjs file

```js
  {
    rules: {
      "no-console": "warn",
      semi: ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["error"], //here i have made unsed variables as errors
    },
  },

  //globalIgnore ...


You can add more rules to eslint config.
Follow their docs
```

#### Testing

```js
git add .

git commit -m "Husky setup completed"

//and you will see this in console

> husky-and-linter@0.1.0 pre-commit X:\darkkphoenyx\Research\husky-and-linter
> pnpm lint


> husky-and-linter@0.1.0 lint X:\darkkphoenyx\Research\husky-and-linter
> eslint
```

## Prettier Setup

- Follow the updated docs: [Prettier Docs](https://prettier.io/docs/install)

Install Prettier

```js
pnpm add --save-dev --save-exact prettier
```

Create .prettierrc file

```js
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

Create .prettierignore file

```js
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

Run this to run prettier

```js
pnpm exec prettier . --write
```

For checking prettier

```js
npx prettier . --check
```

Add this to .prettierrc

```js
{
  "semi": true,
  "tabWidth": 2
}
```

### Add prettier and eslint to .husky/pre-commit

```js
echo ""
echo "🧹Running Prettier..."
pnpm prettier-write

echo ""
echo "✅ Running Pre-Commit..."
pnpm pre-commit

echo ""
echo "🧠 Checking types..."
tsc --noEmit //type-checking gatekeeper.

echo ""
echo "✅ Proceeding with commit."
```

## Lint-Staged setup

This will run the pre-commit only on the staged files i.e after _[git add .]()_ files.  
So that the pre-commit process is faster.

- Follow the updated docs: [Lint-staged](https://github.com/lint-staged/lint-staged)

Install

```js
pnpm install --save-dev lint-staged
```

Add this to your package.json

```js
 "lint-staged": {
    "*": "pnpm pre-commit" //this will call the earlier pre-commit
  }
```

```js
//add pnpm lint-staged at the top of pre-commit like this
echo ""
echo "🪸 Running Lint-Staged..."
echo ""
pnpm lint-staged  //so husky will only run on the staged changes

echo ""
echo "🧹 Running Prettier..."
pnpm prettier-write
//other husky rules
```

## Updated files after adding Lint staged

```js
package.json
//  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "prepare": "husky",
    "prettier-write": "prettier --write",
    "type-check": "tsc --noEmit"
  },
  "lint-staged": {
    "*.{js,ts,tsx,json,css,md}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  },
```

```js
pre-commit file
//pre commits
echo ""
echo "🪸 Running lint-staged on staged files..."
pnpm lint-staged

echo ""
echo "🧠 Type-checking..."
pnpm type-check

echo ""
echo "✅ All checks passed. Proceeding with commit."
```

### Flow

- When we git add . then it will stage the changes
- Git will see the [pre-commit]() bash script and run it
- It will run [pnpm lint-staged]() so only staged files are checked
- Inside lint-staged we have

```js
"lint-staged": {
  "*.{js,ts,tsx,json,css,md}": [
    "prettier --write",
    "eslint --fix"
  ]
},
```

- so it will only look for the changed file of above extensions.
- Runs [prettier --write]() first
- Runs [eslint --fix]()
- Then runs [git add]() to stage all the changes files
- Finally runs the [pnpm type-check]() for type checking and done.

## CommitLint Setup

- Follow the updated docs [CommitLint](https://commitlint.js.org/guides/getting-started.html)

Install

```js
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

Create commitlint.config.js file

```js
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

Generate commit-msg inside .husky

```js
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

Put this inside commit-msg

```js
npx commitlint --edit "$1" || {
  echo ""
  npx tsx show-commit-types.ts
  echo ""
  echo "Example => feat: new feature added"
  exit 1
}
```

Create show-commit-types.ts file on root level and keep this

```js
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
```

Now commitlint setup is completed
