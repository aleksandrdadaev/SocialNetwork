import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

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
			newMessageInputValue: '',
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	},
};

window.store = store;
export default store;
