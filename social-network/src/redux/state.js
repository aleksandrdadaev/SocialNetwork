import { render } from '../render';

let state = {
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
};

export let addPost = () => {
	let newPost = {
		id: 5,
		text: state.profilePage.newPostInputValue,
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostInputValue = '';
	render(state);
};

export let updateNewPostInputValue = newText => {
	state.profilePage.newPostInputValue = newText;
	render(state);
};

export default state;
