import { createSelector } from 'reselect';

export const getfriends = (state) => {
  return state.FriendsPage.friends;
};
export const getFriendsSuper = createSelector(getfriends, (friends) => {
  return friends;
});

export const getPageLength = (state) => {
  return state.FriendsPage.pageLength;
};
export const getTotalUsers = (state) => {
  return state.FriendsPage.totalUsers;
};
export const getCurrentPage = (state) => {
  return state.FriendsPage.currentPage;
};
export const getIsLoading = (state) => {
  return state.FriendsPage.isLoading;
};
export const getFollowingInProgress = (state) => {
  return state.FriendsPage.followingInProgress;
};
export const getIsAuth = (state) => {
  return state.FriendsPage.isAuth;
};
