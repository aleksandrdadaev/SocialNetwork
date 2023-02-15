const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [{ id: 5, text: action.text }, ...state.messages],
			};
		default:
			return state;
	}
};

export const sendMessage = text => ({ type: SEND_MESSAGE, text });

export default dialogsReducer;
