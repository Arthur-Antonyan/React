import { userAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SELECT_SPAN = 'SELECT-SPAN';
const IS_LOADING = 'IS_LOADING';
const IS_FOLLOWING_IN_PROPGRESS = 'IS_FOLLOWING_IN_PROPGRESS';

//
let initialState = {
  friends: [],
  pageLength: 8,
  totalUsers: 0,
  currentPage: 2,
  isLoading: false,
  followingInProgress: [],
  // fake: 10,
};

function friendsPageReducer(state = initialState, action) {
  switch (action.type) {
    // case 'FAKE':
    //   return {
    //     ...state,
    //     fake: state.fake + 1,
    //   };
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map((friend) => {
          if (friend.id === action.friendsId) {
            return { ...friend, followed: true };
          }
          return friend;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map((friend) => {
          if (friend.id === action.friendsId) {
            return { ...friend, followed: false };
          }
          return friend;
        }),
      };

    case SET_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.totalUsers,
      };
    case SELECT_SPAN:
      return {
        ...state,
        currentPage: action.selectedSpan,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case IS_FOLLOWING_IN_PROPGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((item) => item != action.id),
      };

    default:
      return state;
  }
}
export default friendsPageReducer;

export const followSuccess = (friendsId) => {
  return { type: FOLLOW, friendsId };
};
export const unfollowSuccess = (friendsId) => {
  return { type: UNFOLLOW, friendsId };
};

export const setFriends = (friends) => {
  return { type: SET_FRIENDS, friends };
};

export const setTotalUsers = (totalUsers) => {
  return { type: SET_TOTAL_USERS, totalUsers };
};

export const changeSelected = (selectedSpan) => {
  return { type: SELECT_SPAN, selectedSpan };
};

export const isLoadingToggle = (isLoading) => {
  return { type: IS_LOADING, isLoading };
};

export const followingInProgressToggle = (isFollowing, id) => {
  return { type: IS_FOLLOWING_IN_PROPGRESS, isFollowing, id };
};

export const getFriends = (currentPage, pageLength, item) => (dispatch) => {
  dispatch(isLoadingToggle(true));

  userAPI.getUsers(currentPage, pageLength).then((data) => {
    dispatch(isLoadingToggle(false));
    dispatch(setFriends(data.items));
    dispatch(changeSelected(item));
  });
};

export const unfollow = (id) => (dispatch) => {
  dispatch(followingInProgressToggle(true, id));
  userAPI.unfollow(id).then((data) => {
    if (data.resultCode === 0) dispatch(unfollowSuccess(id));
    dispatch(followingInProgressToggle(false, id));
  });
};
export const follow = (id) => (dispatch) => {
  dispatch(followingInProgressToggle(true, id));
  userAPI.follow(id).then((data) => {
    if (data.resultCode === 0) dispatch(followSuccess(id));
    dispatch(followingInProgressToggle(false, id));
  });
};
