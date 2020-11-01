import counterReducer from './counter';
import { combineReducers } from 'redux';
import test from './exampleReducer';

const rootReducer = combineReducers({
    counterReducer,
    test
})
export default rootReducer