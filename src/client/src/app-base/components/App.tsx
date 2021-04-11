import React from 'react';
import { Provider } from 'react-redux';
import { store } from '_store';
import { MapBase } from 'map-core';
import { Counter } from 'redux-counter-example';
import styles from './App.module.scss';

export default function App() {
  return (
    <Provider store={store}>
      <MapBase />
      <Counter />
    </Provider>
  );
}
