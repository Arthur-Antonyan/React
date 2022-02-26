import React from 'react';
import styles from './Friends.module.css';
import loadgif from '../../assets/images/load.gif';
import Preloader from '../Preloader/Preloader';

function FriendsComponent(props) {
  props.setTotalUsers(30);
  let pages = [];
  let pagesAmount = Math.ceil(props.totalUsers / props.pageLength);
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <>{props.isLoading ? <Preloader /> : ''}</>
      <div>
        {pages.map((item) => {
          return (
            <span className={props.currentPage == item ? styles.selected : ''} onClick={() => props.changePages(item)}>
              {item}
            </span>
          );
        })}
      </div>

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
export default FriendsComponent;
