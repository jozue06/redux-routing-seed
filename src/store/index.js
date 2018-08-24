import { createStore } from 'redux';
import thingReducer from './thing';

export default createStore(thingReducer);