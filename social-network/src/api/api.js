import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
	getUsers(pageSize = 5, currentPage = 1) {
		return instance
			.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => response.data);
	},
	followUser(id) {
		return instance.post(`follow/${id}`).then(response => response.data);
	},
	unFollowUser(id) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},
};
