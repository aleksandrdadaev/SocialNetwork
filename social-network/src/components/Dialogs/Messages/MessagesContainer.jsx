import { connect } from 'react-redux';
import Messages from './Messages';
import { sendMessage } from '../../../redux/dialogsReducer';

let mapStateToProps = state => {
	return {
		messages: state.dialogsPage.messages,
	};
};

const MessagesContainer = connect(mapStateToProps, { sendMessage })(Messages);

export default MessagesContainer;
