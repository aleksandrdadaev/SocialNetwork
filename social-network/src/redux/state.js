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
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('State changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			text: this._state.profilePage.newPostInputValue,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostInputValue = '';
		this._callSubscriber(this._state);
	},
	updateNewPostInputValue(newValue) {
		this._state.profilePage.newPostInputValue = newValue;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer; // наблюдатель
	},
};

export default store;
