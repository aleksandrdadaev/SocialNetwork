const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_INPUT_VALUE = 'UPDATE-NEW-POST-INPUT-VALUE';

let initialState = {
	posts: [
		{ id: 1, text: 'Hi, how are you?' },
		{ id: 2, text: "It's my second post" },
	],
	newPostInputValue: '',
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
		default:
			return state;
	}
};

export const addPostAC = () => ({ type: ADD_POST });

export const updateNewPostInputValueAC = text => ({
	type: UPDATE_NEW_POST_INPUT_VALUE,
	newValue: text,
});

export default profileReducer;
