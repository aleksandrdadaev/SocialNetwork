import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
	posts: [
		{ id: 1, text: 'Hi, how are you?' },
		{ id: 2, text: "It's my second post" },
	],
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [{ id: 5, text: action.text }, ...state.posts],
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_STATUS:
			return {
				...state,
				status: action.newStatus,
			};
		default:
			return state;
	}
};

export const addPost = text => ({ type: ADD_POST, text });

export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
});
export const setStatus = newStatus => ({
	type: SET_STATUS,
	newStatus,
});

export const getProfile = userId => dispatch => {
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfile(data));
	});
};
export const getStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(data => {
		dispatch(setStatus(data));
	});
};
export const updateStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
};

export default profileReducer;
