import { connect } from 'react-redux';
import DialogsList from './DialogsList';

let mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};

let mapDispatchToProps = dispatch => {
	return {};
};

const DialogsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsList);

export default DialogsListContainer;
