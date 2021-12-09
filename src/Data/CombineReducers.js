import { combineReducers } from 'redux';

import Auth from './Auth';
import Admin from './Admin';
import Teacher from './Teacher';
import Student from './Student';

export default combineReducers({

    Auth,
    Admin,
    Teacher,
    Student

});