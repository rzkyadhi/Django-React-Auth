import { combineReducers } from 'redux';
import djangoreact from './djangoreact';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    djangoreact,
    errors,
    messages
});