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
			let newPost = {
				id: 5,
				text: state.newPostInputValue,
			};
			state.posts.push(newPost);
			state.newPostInputValue = '';
			return state;
		case UPDATE_NEW_POST_INPUT_VALUE:
			state.newPostInputValue = action.newValue;
			return state;
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
