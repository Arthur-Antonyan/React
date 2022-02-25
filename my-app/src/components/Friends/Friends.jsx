import React from 'react';
import styles from './Friends.module.css';

function Friends(props) {
  if (props.friends.length == 0) {
    props.setFriends([
      {
        id: 1,
        img: `https://www.w3schools.com/howto/img_avatar.png`,
        followed: false,
        firstName: 'Anton',
        secondName: 'Ishhutin',
        status: 'I am boss',
        locations: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
      {
        id: 2,
        img: `https://www.w3schools.com/howto/img_avatar.png`,
        followed: true,
        firstName: 'Armen',
        secondName: 'Nazaryan',
        status: 'I am boss',
        locations: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
      {
        id: 3,
        img: `https://www.w3schools.com/howto/img_avatar.png`,
        followed: false,
        firstName: 'Levon',
        secondName: 'Aronyan',
        status: 'I am boss',
        locations: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
      {
        id: 4,
        img: `https://www.w3schools.com/howto/img_avatar.png`,
        followed: true,
        firstName: 'Gago',
        secondName: 'Karapet',
        status: 'I am boss',
        locations: {
          country: 'Belarus',
          city: 'Minsk',
        },
      },
    ]);
  }
  return (
    <div>
      {props.friends.map((item) => {
        return (
          <div key={item.id}>
            <span>
              <div>
                <img src={item.img} className={styles.img} />
              </div>
              <div>
                {item.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(item.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(item.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{item.firstName}</div>
                <div>{item.status}</div>
              </span>
              <span>
                <div>{item.locations.city}</div>
                <div>{item.locations.country}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
export default Friends;
