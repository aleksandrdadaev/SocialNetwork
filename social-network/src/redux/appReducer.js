import { auth } from './authReducer';

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			};
		default:
			return state;
	}
};

const initialized = () => ({ type: SET_INITIALIZED });

export const initialize = () => dispatch => {
	let promise = dispatch(auth());
	Promise.all([promise]).then(() => {
		dispatch(initialized());
	});
};

export default appReducer;
