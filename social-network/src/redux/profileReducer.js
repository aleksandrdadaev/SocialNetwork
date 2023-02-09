import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_INPUT_VALUE = 'UPDATE-NEW-POST-INPUT-VALUE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	posts: [
		{ id: 1, text: 'Hi, how are you?' },
		{ id: 2, text: "It's my second post" },
	],
	newPostInputValue: '',
	profile: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let text = state.newPostInputValue;
			return {
				...state,
				posts: [{ id: 5, text: text }, ...state.posts],
				newPostInputValue: '',
			};
		case UPDATE_NEW_POST_INPUT_VALUE:
			return {
				...state,
				newPostInputValue: action.newValue,
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		default:
			return state;
	}
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostInputValueAC = text => ({
	type: UPDATE_NEW_POST_INPUT_VALUE,
	newValue: text,
});
export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
});

export const getProfile = userId => dispatch => {
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfile(data));
	});
};

export default profileReducer;
