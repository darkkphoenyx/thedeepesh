## Husky setup

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

Run the prepare command

```js
pnpm husky prepare
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
