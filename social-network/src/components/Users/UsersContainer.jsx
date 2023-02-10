import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
	setCurrentPage,
	getUsers,
	unFollowUser,
	followUser,
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage);
	}
	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(this.props.pageSize, pageNumber);
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
						onPageChanged={this.onPageChanged}
						followingInProgress={this.props.followingInProgress}
						followUser={this.props.followUser}
						unFollowUser={this.props.unFollowUser}
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
let mapDispatchToProps = {
	setCurrentPage,
	getUsers,
	followUser,
	unFollowUser,
};

export default withAuthRedirect(
	connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
);
