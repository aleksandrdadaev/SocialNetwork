import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';
import UsersC from './UsersC';

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		follow: userId => {
			let action = followAC(userId);
			dispatch(action);
		},
		unFollow: userId => {
			let action = unFollowAC(userId);
			dispatch(action);
		},
		setUsers: users => {
			let action = setUsersAC(users);
			dispatch(action);
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
