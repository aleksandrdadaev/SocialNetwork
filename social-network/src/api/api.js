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

export const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`).then(response => response.data);
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/${userId}`)
			.then(response => response.data);
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, { status })
			.then(response => response.data);
	},
};

export const authAPI = {
	auth() {
		return instance.get(`auth/me`).then(response => response.data);
	},
};
