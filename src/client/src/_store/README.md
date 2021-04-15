# Redux usage in `valo-lineups`

## Overview

`valo-lineups` uses a Redux store to help maintain common UI states throughout it's application. All store logic will live in this `./_store` package. The main store is exported from `./configureStore` and is imported in the `app-base` package. There it will be passed through a provider to the rest of the application.

For a quick example of it's usage, a simple counter was added into the `app-base`. Check out `./ducks/count.ts` for store mutation logic and the `redux-counter-example` package to see how the reducers, actions, and components work together.

### Ducks? (& File Organization)

Inspired by https://github.com/erikras/ducks-modular-redux. Reducers should be broken up into modular chunks, or "ducks", as seen in the example `./ducks/count.ts`. Each of these will define it's own constants, types, reducers, and actions to keep similar state changes in one file. In the example provided, the `count` file is in charge of defining and implementing the actions that impact the `count` property in the store.

#### Rules (per [the above instructions](https://github.com/erikras/ducks-modular-redux)):

- MUST `export default` a function called reducer()
- MUST `export` its action creators as functions
- MUST have action types in the form `{app-name}/{reducer}/{ACTION_TYPE}`

### Hooks

Typically Redux applications rely on the `useSelector` and `useDispatch` hooks to retrieve values from the store & execute actions, respectively. Since this project uses Typescript, the `hooks` directory exposes strictly typed wrappers of these two hooks:

- `useAppSelector`
- `useAppDispatch`

As seen in the `redux-counter-example`, we import these two hooks from the store to read the count from the store and dispatch the actions of incrementing or decrementing the count.

NOTE: the usage of `useSelector` and `useDispatch` can still be used, but manual type definitions will have to be added. Using the provided hooks is a simple way to avoid having to explicitly type selectors/dispatchers over and over.

---

## Adding a new store value

1. Add the new reducer logic in a new file under `./ducks`. Remember to follow the duck organization pattern per the instructions above!
2. The reducer must be registered in the store. To do that, import the reducer function in `./rootRreducer.ts` and add it to the object passed in to `combineReducers()`.
   - NOTE: the key will be the name used to access the store value. In the `count` example, the `count` property in the store will end up being the initial state value defined inside the corresponding duck file. In this case, it will be set to the `number` 0.
3. Export the actions in the `./index.ts` file so that components or other packages can properly dispatch those actions.
