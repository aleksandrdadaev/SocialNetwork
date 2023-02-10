import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import DialogsList from './DialogsList';

let mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};

const DialogsListContainer = compose(
	withAuthRedirect,
	connect(mapStateToProps)
)(DialogsList);

export default DialogsListContainer;
