import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from './thing';

export default createStore(combineReducers({thingState: thingReducer}), applyMiddleware(thunk));