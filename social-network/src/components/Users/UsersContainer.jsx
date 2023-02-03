import React from 'react';
import axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import {
	follow,
	setCurrentPage,
	setIsFetching,
	setUsers,
	setTotalUsersCount,
	unFollow,
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(response => {
				this.props.setIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.props.setIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
			)
			.then(response => {
				this.props.setIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						users={this.props.users}
						unFollow={this.props.unFollow}
						follow={this.props.follow}
						onPageChanged={this.onPageChanged}
					/>
				)}
			</>
		);
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

// let mapDispatchToProps = dispatch => {
// 	return {
// 		follow: userId => {
// 			let action = followAC(userId);
// 			dispatch(action);
// 		},
// 		unFollow: userId => {
// 			let action = unFollowAC(userId);
// 			dispatch(action);
// 		},
// 		setUsers: users => {
// 			let action = setUsersAC(users);
// 			dispatch(action);
// 		},
// 		setCurrentPage: page => {
// 			let action = setCurrentPageAC(page);
// 			dispatch(action);
// 		},
// 		setTotalUsersCount: usersCount => {
// 			let action = setUsersTotalCountAC(usersCount);
// 			dispatch(action);
// 		},
// 		setIsFetching: isFetching => {
// 			let action = setIsFetchingAC(isFetching);
// 			dispatch(action);
// 		},
// 	};
// };

let mapDispatchToProps = {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	setIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
