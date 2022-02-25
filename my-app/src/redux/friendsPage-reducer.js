const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
  friends: [
    // {
    //   id: 1,
    //   img: `https://www.w3schools.com/howto/img_avatar.png`,
    //   followed: false,
    //   firstName: 'Anton',
    //   secondName: 'Ishhutin',
    //   status: 'I am boss',
    //   locations: {
    //     country: 'Belarus',
    //     city: 'Minsk',
    //   },
    // },
    // {
    //   id: 2,
    //   img: `https://www.w3schools.com/howto/img_avatar.png`,
    //   followed: true,
    //   firstName: 'Armen',
    //   secondName: 'Nazaryan',
    //   status: 'I am boss',
    //   locations: {
    //     country: 'Belarus',
    //     city: 'Minsk',
    //   },
    // },
    // {
    //   id: 3,
    //   img: `https://www.w3schools.com/howto/img_avatar.png`,
    //   followed: false,
    //   firstName: 'Levon',
    //   secondName: 'Aronyan',
    //   status: 'I am boss',
    //   locations: {
    //     country: 'Belarus',
    //     city: 'Minsk',
    //   },
    // },
    // {
    //   id: 4,
    //   img: `https://www.w3schools.com/howto/img_avatar.png`,
    //   followed: true,
    //   firstName: 'Gago',
    //   secondName: 'Karapet',
    //   status: 'I am boss',
    //   locations: {
    //     country: 'Belarus',
    //     city: 'Minsk',
    //   },
    // },
  ],
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
