import { combineReducers } from 'redux';
import person from './person';
import counter from './counter';

const reducers = combineReducers({
    person,
    counter
})

export default reducers;