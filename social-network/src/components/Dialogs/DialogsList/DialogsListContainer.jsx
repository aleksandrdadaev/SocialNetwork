import { connect } from 'react-redux';
import DialogsList from './DialogsList';

let mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
		isAuth: state.auth.isAuth,
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
