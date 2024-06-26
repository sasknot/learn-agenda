# Learn: Agenda

Built with [Vite](https://vitejs.dev) + [Vue 3](https://vuejs.org) + [TypeScript](https://www.typescriptlang.org) + [Tailwind](https://tailwindcss.com)

See [demo](https://rafaelfsilva1-agenda.vercel.app)

## Requirements

- [NodeJS](https://nodejs.org)

## Initial setup

Run `npm ci`, it will download all required packages under `node_modules` directory

## Development

Run `npm run dev`, app will be available at [localhost:8080](http://localhost:8080)

## Lint

- Run `npm run lint`, `errors` and `warns` will be pointed in terminal if they exists
- Run `npm run lint:fix`, eslint will try to fix all `errors` and `warns` and point the ones it couldn't fix

## Production

Run `npm run build` and files will be at `dist` folder

## Results

### What I learnt?

- Bootstraping with Vite + Vue 3
- Usage of TailwindCSS
- Vue 3 Composition API
- Better cookie/localStorage data store
- Usage of VeeValidate

### What I will try to do henceforth?

#### Use Vite + Vue 3
Best stack, ever! Vite is super fast.

#### Use Vue 3 Composition API
The Composition API seems very interesting about the fact when coding a Vue component you are not limited to use the code just inside it, you can reuse it outside or even reuse between components in a ES module-like style.

#### Better organization of tasks and todos
For the next "learn" projects I will describe all tasks and todos before even coding. If it is possible, I could even make documents about it.

### What I will consider not doing anymore?

#### Using TailwindCSS for large projects
It seems attractive in the start, but when the UI gets more complicated you get yourself again in the need for mastering a framework, not the usual HTML/CSS stuff.

#### Use cookies when not necessary
If I have a single application using this shared/commom user data, there is no need to use cookies.
