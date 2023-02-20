import React from 'react';
import { connect } from 'react-redux';
import {
	getProfile,
	getStatus,
	updateStatus,
} from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) userId = this.props.authorizedUserId;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return <Profile {...this.props} updateStatus={this.props.updateStatus} />;
	}
}

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
	};
};

export default compose(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(ProfileContainer);
