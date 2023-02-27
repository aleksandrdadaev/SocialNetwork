import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objectHelpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false,
				}),
			};
		case SET_USERS:
			return { ...state, users: [...action.users] };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };
		case SET_USERS_TOTAL_COUNT:
			return { ...state, totalUsersCount: action.usersCount };
		case SET_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.id]
					: state.followingInProgress.filter(id => id !== action.id),
			};
		default:
			return state;
	}
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setTotalUsersCount = usersCount => ({
	type: SET_USERS_TOTAL_COUNT,
	usersCount,
});
export const setIsFetching = isFetching => ({
	type: SET_IS_FETCHING,
	isFetching,
});
export const toggleFollowingProgress = (isFetching, id) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	id,
});

export const requestUsers = (pageSize, page) => async dispatch => {
	dispatch(setIsFetching(true));
	const data = (await usersAPI.getUsers(pageSize, page)).data;
	dispatch(setIsFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
	dispatch,
	userId,
	apiMethod,
	actionCreator
) => {
	dispatch(toggleFollowingProgress(true, userId));
	const data = (await apiMethod(userId)).data;
	if (data.resultCode === 0) dispatch(actionCreator(userId));
	dispatch(toggleFollowingProgress(false, userId));
};

export const followUser = userId => dispatch => {
	followUnfollowFlow(dispatch, userId, usersAPI.followUser, follow);
};

export const unFollowUser = userId => async dispatch => {
	followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser, unFollow);
};

export default usersReducer;
