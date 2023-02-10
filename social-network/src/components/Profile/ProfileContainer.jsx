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

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) userId = 27739;
		this.props.getProfile(userId);
	}

	render() {
		if (!this.props.isAuth) return <Navigate to='/login' />;
		return <Profile {...this.props} />;
	}
}

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
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
)(withRouter(ProfileContainer));
