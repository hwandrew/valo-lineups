import { AnyAction } from 'redux';

// types & constants
export interface ICountState {
  count: number;
}

const INCREMENT: string = 'counter/increment';
const DECREMENT: string = 'counter/decrement';
const INITIAL_STATE: ICountState = {
  count: 0,
};

// reducer
const countReducer = (
  state: ICountState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
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
