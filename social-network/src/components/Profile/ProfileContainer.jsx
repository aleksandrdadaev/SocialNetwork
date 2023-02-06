import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) userId = 27739;
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data);
			});
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

let mapDispatchToProps = {
	setUserProfile,
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
