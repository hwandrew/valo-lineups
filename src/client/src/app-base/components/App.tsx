import React from 'react';
import { MapBase } from 'map-core';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.mapContainer}>
      <MapBase />
    </div>
  );
}
