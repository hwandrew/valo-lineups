import * as React from 'react';
import { increment, decrement, useAppDispatch, useAppSelector } from '_store';

export default function Counter() {
  const count: number = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
