import { connect } from 'react-redux';
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	unFollowAC,
} from '../../redux/usersReducer';
import Users from './Users';
import UsersC from './UsersC';

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
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
		setCurrentPage: page => {
			let action = setCurrentPageAC(page);
			dispatch(action);
		},
		setTotalUsersCount: usersCount => {
			let action = setUsersTotalCountAC(usersCount);
			dispatch(action);
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
