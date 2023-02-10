import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import {
	Navigate,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
	};
};

let mapDispatchToProps = {
	getProfile,
};

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(AuthRedirectComponent));
