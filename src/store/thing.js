// Actions
const ADD = 'Thing/ADD';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
}

// Action Creators
export function addThing(thing) {
  return {
    type: ADD,
    payload: thing
  }  
}