import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) userId = 27739;
		this.props.getProfile(userId);
	}

	render() {
		return <Profile {...this.props} />;
	}
}

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
	};
};

export default compose(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile })
)(ProfileContainer);
