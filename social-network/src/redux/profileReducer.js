const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_INPUT_VALUE = 'UPDATE-NEW-POST-INPUT-VALUE';

const profileReducer = (state, action) => {
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
