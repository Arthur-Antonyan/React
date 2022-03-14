import { createSelector } from 'reselect';

export function getProfile(state) {
  return state.PostPage.profile;
}
export function getIsAuth(state) {
  return state.auth.isAuth;
}
export function getStatus(state) {
  return state.PostPage.status;
}
export function getMyId(state) {
  return state.auth.id;
}
function getUser(state) {
  return state.MessagePage.user;
}
export const getUserSuper = createSelector(getUser, (user) => {
  return user.filter((u) => true);
});
