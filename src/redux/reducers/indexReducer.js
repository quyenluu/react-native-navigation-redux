import { combineReducers } from 'redux';

import Login from './AuthReducer/LoginReducer';
import Logout from './AuthReducer/LogoutRedcuer';

const indexReducer = combineReducers({
    login: Login,
    logout: Logout
});

export default indexReducer;