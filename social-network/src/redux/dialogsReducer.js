const UPDATE_NEW_MESSAGE_INPUT_VALUE = 'UPDATE-NEW-MESSAGE-INPUT-VALUE';
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
	newMessageInputValue: '',
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 5,
				text: state.newMessageInputValue,
			};
			state.messages.push(newMessage);
			state.newMessageInputValue = '';
			return state;
		case UPDATE_NEW_MESSAGE_INPUT_VALUE:
			state.newMessageInputValue = action.newValue;
			return state;
		default:
			return state;
	}
};

export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export const updateNewMessageInputValueAC = text => ({
	type: UPDATE_NEW_MESSAGE_INPUT_VALUE,
	newValue: text,
});

export default dialogsReducer;
