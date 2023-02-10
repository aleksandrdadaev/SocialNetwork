import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import DialogsList from './DialogsList';

let mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};

let mapDispatchToProps = dispatch => {
	return {};
};

let AuthRedirectComponent = withAuthRedirect(DialogsList);

const DialogsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsListContainer;
