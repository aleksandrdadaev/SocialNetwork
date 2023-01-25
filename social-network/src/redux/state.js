const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_INPUT_VALUE = 'UPDATE-NEW-POST-INPUT-VALUE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, text: 'Hi, how are you?' },
				{ id: 2, text: "It's my second post" },
			],
			newPostInputValue: '',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Sanchezz' },
				{ id: 2, name: 'Danil' },
				{ id: 3, name: 'Pahan' },
			],
			messages: [
				{ id: 1, text: 'Hi' },
				{
					id: 2,
					text: 'How are you?',
				},
				{ id: 3, text: 'Hi' },
				{ id: 4, text: 'Yo' },
			],
		},
	},
	_callSubscriber() {},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer; // наблюдатель
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				text: this._state.profilePage.newPostInputValue,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostInputValue = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_INPUT_VALUE) {
			this._state.profilePage.newPostInputValue = action.newValue;
			this._callSubscriber(this._state);
		}
	},
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostInputValueActionCreator = text => ({
	type: UPDATE_NEW_POST_INPUT_VALUE,
	newValue: text,
});

export default store;
