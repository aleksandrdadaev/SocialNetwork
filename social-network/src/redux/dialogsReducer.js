const UPDATE_NEW_MESSAGE_INPUT_VALUE = 'UPDATE-NEW-MESSAGE-INPUT-VALUE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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
