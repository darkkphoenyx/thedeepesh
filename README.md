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
