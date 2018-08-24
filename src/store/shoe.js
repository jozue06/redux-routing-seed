// Actions
const DELETE = 'Shoe/DELETE';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
}

// Action Creators
export function deleteShoe() {
  
}