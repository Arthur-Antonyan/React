const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
// const SET_TOTAL_USERS='SET-TOTAL-USERS'

let initialState = {
  friends: [],
  // pageLength:5,
  // totalUsers:20
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
        friends: [...state.friends, ...action.friends],
      };
    // case SET_FRIENDS:
    // return {
    //   ...state,
    //   friends: [...state.friends, ...action.friends],
    // };

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

// export const setTotalUsersAC = (usersCount) => {
//   return { type: SET_TOTAL_USERS, usersCount };
// };
