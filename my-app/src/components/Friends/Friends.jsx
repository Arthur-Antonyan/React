import React from 'react';
import styles from './Friends.module.css';
import loadgif from '../../assets/images/load.gif';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { userAPI } from '../../api/api';

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
                <NavLink to={'/profile/' + item.id}>
                  <img
                    src={item.photos.small ? item.photos.small : 'https://www.w3schools.com/howto/img_avatar.png'}
                    className={styles.img}
                  />
                </NavLink>
              </div>
              <div>
                {item.followed ? (
                  <button
                    disabled={props.isFollowing.some((i) => i === item.id)}
                    onClick={() => {
                      props.unfollow(item.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.isFollowing.some((i) => i === item.id)}
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
