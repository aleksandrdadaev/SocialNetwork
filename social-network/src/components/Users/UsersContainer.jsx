import React from 'react';
import axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	unFollowAC,
} from '../../redux/usersReducer';

class UsersContainer extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unFollow={this.props.unFollow}
				follow={this.props.follow}
				onPageChanged={this.onPageChanged}
			/>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
