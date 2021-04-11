import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, ICountState } from '_store';

export default function Counter() {
  const count = useSelector((state: ICountState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
