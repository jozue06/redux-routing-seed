import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from './thing';
import shoeReducer from './shoe';

const appReducer = combineReducers({thingState: thingReducer, shoeState : shoeReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));