import { combineReducers } from 'redux';

import Login from './AuthReducer/LoginReducer';
import Logout from './AuthReducer/LogoutRedcuer';
import navReducer from './navReducer';

const indexReducer = combineReducers({
    nav: navReducer,
    login: Login,
    logout: Logout
});

export default indexReducer;