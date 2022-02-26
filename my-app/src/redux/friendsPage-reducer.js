const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SELECT_SPAN = 'SELECT-SPAN';

let initialState = {
  friends: [],
  pageLength: 5,
  totalUsers: 0,
  currentPage: 1,
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

    default:
      return state;
  }
}
export default friendsPageReducer;

export const followAC = (friendsId) => {
  return { type: FOLLOW, friendsId };
};
export const unFollowAC = (friendsId) => {
  return { type: UNFOLLOW, friendsId };
};

export const setFriendsAC = (friends) => {
  return { type: SET_FRIENDS, friends };
};

export const setTotalUsersAC = (totalUsers) => {
  return { type: SET_TOTAL_USERS, totalUsers };
};

export const changeSelectedAC = (selectedSpan) => {
  return { type: SELECT_SPAN, selectedSpan };
};
