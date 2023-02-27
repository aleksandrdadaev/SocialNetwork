import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
	getUsers(pageSize = 5, currentPage = 1) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`);
	},
	followUser(id) {
		return instance.post(`follow/${id}`);
	},
	unFollowUser(id) {
		return instance.delete(`follow/${id}`);
	},
};

export const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status });
	},
};

export const authAPI = {
	auth() {
		return instance.get('auth/me');
	},
	login(email, password, rememberMe = false) {
		return instance.post('auth/login', { email, password, rememberMe });
	},
	logout() {
		return instance.delete('auth/login');
	},
};
