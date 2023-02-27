import profileReducer, { addPost } from './profileReducer';

let state = {
	posts: [
		{ id: 1, text: 'Hi, how are you?' },
		{ id: 2, text: "It's my second post" },
	],
};

test('length of posts should be incremented', () => {
	let action = addPost('sanchezz');
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
	let action = addPost('sanchezz');
	let newState = profileReducer(state, action);
	expect(newState.posts[2].message).toBe('sanchezz');
});
