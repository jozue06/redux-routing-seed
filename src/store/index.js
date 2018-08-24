import { createStore } from 'react-redux';
import thingReducer from './thing';

export default createStore(thingReducer);