import * as types from './actionTypes';

export const login = (dataUser) => ({
    type: types.LOGIN,
    payload: dataUser
});

export const logout = () => ({
    type: types.LOGOUT
})