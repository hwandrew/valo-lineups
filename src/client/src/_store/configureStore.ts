import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}

const store = configureAppStore();
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
