import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const CLEAR_USER_DATA = 'auth/CLEAR-USER-DATA';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			};
		case CLEAR_USER_DATA:
			return {
				...state,
				id: null,
				login: null,
				email: null,
				isAuth: false,
			};
		default:
			return state;
	}
};

const setAuthUserData = data => ({ type: SET_USER_DATA, data });
const clearAuthUserData = () => ({ type: CLEAR_USER_DATA });

export const auth = () => async dispatch => {
	const data = (await authAPI.auth()).data;
	if (data.resultCode === 0) dispatch(setAuthUserData(data.data));
	else dispatch(clearAuthUserData());
};

export const login = (email, password, rememberMe) => async dispatch => {
	const data = (await authAPI.login(email, password, rememberMe)).data;
	if (data.resultCode === 0) dispatch(auth());
	else dispatch(stopSubmit('login', { _error: data.messages[0] }));
};

export const logout = () => async dispatch => {
	const data = (await authAPI.logout()).data;
	if (data.resultCode === 0) dispatch(auth());
};

export default authReducer;
