import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { auth } from '../../redux/authReducer';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.auth();
	}

	render() {
		return <Header {...this.props} />;
	}
}

let mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	};
};

let mapDispatchToProps = {
	auth,
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
