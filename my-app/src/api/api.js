import axios from 'axios';

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': 'e193afd4-56ed-4d04-aa5a-9d51d09006db',
  },
});

export const userAPI = {
  getUsersProfileInfo(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getUsers(currentPage, pageLength) {
    return instance.get(`users?page=${currentPage}&count=${pageLength}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/` + id).then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/` + id).then((response) => response.data);
  },
  setUserInfo() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const ProfileAPI = {
  getStatus(userId) {
    return instance.get('profile/status/' + userId).then((response) => response.data);
  },
  setStatus(status) {
    return instance.put('profile/status', { status });
  },
};

export const LoginApi = {
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe }).then((response) => response.data);
  },
  logOut() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
