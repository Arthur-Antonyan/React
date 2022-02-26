const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SELECT_SPAN = 'SELECT-SPAN';
const IS_LOADING = 'IS_LOADING';

let initialState = {
  friends: [],
  pageLength: 3,
  totalUsers: 0,
  currentPage: 1,
  isLoading: false,
};

function friendsPageReducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
export default friendsPageReducer;

export const follow = (friendsId) => {
  return { type: FOLLOW, friendsId };
};
export const unfollow = (friendsId) => {
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
