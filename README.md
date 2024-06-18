# B's Playground

Personal playground for components development, currently repurposed to display a typical to do task app example.
For the purpouse of this US you might want to focus on TaskList & TaskListItem components, located under:
src/components/03-Templates/Tasklist/
src/components/01-Molecules/TasklistItem/

This proyect follows an Atomic Design architecture, all interactions with stores should live withing vue views, (Not inside components), currently doesn't contain any binding to DDBB.

## Project state

-This branch is still in [under devepment] state as test are currently unfinished, nevertheless components have been manually tested and all features are accounted.

-DO NOT consider this the final result for a technical interview proccess. Instead take it as something I've put toghether in a rush so you can have a general idea and assess my capabilities.

-Styleguide views have not being updated in a while & need some visual makeup.

-Home needs proper copy & some component restructure (TheWelcome components)

-About view TBD

## Project backlog

-Project foundation and base components development (except TaskList & TaskList components) (~60h)
-To Do TaskList development, bases component integrations & state management(NO API, yet) (~40h)

## Roadmap

-TaskList scroll feature
-Textarea on descriptions feature
-TaskList & TasklistItem Component testing

/// Development closed
-Merge into dev
-Reprupose TheWelcomeComponent & WelcomeItem into a proper Atomic Design component

/// US closed
-Review Full Component testing suite

/// Theming US
-Theming on BadgeInteractable & BasicInteractable (Icon sizing)
-Theming on BadgeInteractable & BasicInteractable (Typography)
-Generate utils for theming & create respective unitTests.

/// First deployment US
-Plan first deployment to staging. (Vercel?)
-e2e test for App route. Plan end to end testing really.
-Integrate testing suites with CI Deployment system.

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Cypress] (Only component testing for the time being) (https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

### ```sh

### npm run test:unit

### ```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
