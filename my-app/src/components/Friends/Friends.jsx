import React from 'react';
import styles from './Friends.module.css';
import * as axios from 'axios';

function Friends(props) {
  function addFriends() {
    if (props.friends.length == 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => props.setFriends(response.data.items));
    }
  }
  return (
    <div>
      <button onClick={addFriends}>Add Friends</button>
      {props.friends.map((item) => {
        return (
          <div key={item.id}>
            <span>
              <div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" className={styles.img} />
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
                <div>{item.name}</div>
                <div>{item.status}</div>
              </span>
              <span>
                <div>{'item.locations.city'}</div>
                <div>{'item.locations.country'}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
export default Friends;
