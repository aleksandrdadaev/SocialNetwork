const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		// {
		// 	id: 1,
		// 	fullName: 'Danil N',
		// 	location: { country: 'Russia', city: 'Novokuznetsk' },
		// 	age: 20,
		// 	followed: false,
		// 	photoUrl:
		// 		'https://icdn.lenta.ru/images/2021/06/03/14/20210603141543555/square_320_e69d8d78f5a03c281c39be35b26108fc.jpg',
		// },
		// {
		// 	id: 2,
		// 	fullName: 'Sanchezz A',
		// 	location: { country: 'Russia', city: 'Moscow' },
		// 	age: 27,
		// 	followed: true,
		// 	photoUrl:
		// 		'https://icdn.lenta.ru/images/2021/06/03/14/20210603141543555/square_320_e69d8d78f5a03c281c39be35b26108fc.jpg',
		// },
		// {
		// 	id: 3,
		// 	fullName: 'Pavel K',
		// 	location: { country: 'Russia', city: 'Saint-Petersburg' },
		// 	age: 34,
		// 	followed: false,
		// 	photoUrl:
		// 		'https://icdn.lenta.ru/images/2021/06/03/14/20210603141543555/square_320_e69d8d78f5a03c281c39be35b26108fc.jpg',
		// },
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) return { ...u, followed: true };
					return u;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) return { ...u, followed: false };
					return u;
				}),
			};
		case SET_USERS:
			return { ...state, users: [...action.users] };
		default:
			return state;
	}
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
