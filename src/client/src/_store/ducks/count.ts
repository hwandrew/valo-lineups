import { AnyAction } from 'redux';

// types & constants
const INCREMENT: string = 'valo-lineups/counter/increment';
const DECREMENT: string = 'valo-lineups/counter/decrement';
const INITIAL_STATE: number = 0;

// reducer
const countReducer = (state: number = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export default countReducer;

// actions
export const increment = (): AnyAction => {
  return {
    type: INCREMENT,
  };
};

export const decrement = (): AnyAction => {
  return {
    type: DECREMENT,
  };
};
