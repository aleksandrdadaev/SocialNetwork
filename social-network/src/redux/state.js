import { render } from '../render';

let state = {
	profilePage: {
		posts: [
			{ id: 1, text: 'Hi, how are you?' },
			{ id: 2, text: "It's my second post" },
		],
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

export let addPost = postText => {
	let newPost = {
		id: 5,
		text: postText,
	};
	state.profilePage.posts.push(newPost);
	render(state);
};

export default state;
