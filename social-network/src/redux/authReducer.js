import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const CLEAR_USER_DATA = 'CLEAR-USER-DATA';

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

export const auth = () => dispatch => {
	authAPI.auth().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(data.data));
		}
		if (data.resultCode !== 0) {
			dispatch(clearAuthUserData());
		}
	});
};

export const login = (email, password, rememberMe) => dispatch => {
	authAPI.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(auth());
		}
	});
};

export const logout = () => dispatch => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(auth());
		}
	});
};

export default authReducer;
