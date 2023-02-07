import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
	follow,
	setCurrentPage,
	setIsFetching,
	setUsers,
	setTotalUsersCount,
	unFollow,
	toggleFollowingProgress,
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setIsFetching(true);
		usersAPI
			.getUsers(this.props.pageSize, this.props.currentPage)
			.then(data => {
				this.props.setIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.props.setIsFetching(true);
		usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
			this.props.setIsFetching(false);
			this.props.setUsers(data.items);
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
						toggleFollowingProgress={this.props.toggleFollowingProgress}
						followingInProgress={this.props.followingInProgress}
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
		followingInProgress: state.usersPage.followingInProgress,
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
	toggleFollowingProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
