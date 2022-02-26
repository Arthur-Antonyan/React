import React from 'react';
import styles from './Friends.module.css';
import * as axios from 'axios';

class Friends extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageLength}`)
      .then((response) => this.props.setFriends(response.data.items));
  }
  changePages(item) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageLength}`)
      .then((response) => this.props.setFriends(response.data.items));
    // event.target.className = styles.selected;
    this.props.changeSelected(item);
  }

  render() {
    this.props.setTotalUsers(30);
    let pages = [];
    let pagesAmount = Math.ceil(this.props.totalUsers / this.props.pageLength);
    for (let i = 1; i <= pagesAmount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((item) => {
            return (
              <span className={this.props.currentPage == item ? styles.selected : ''} onClick={() => this.changePages(item)}>
                {item}
              </span>
            );
          })}
        </div>

        {this.props.friends.map((item) => {
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
                        this.props.unfollow(item.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(item.id);
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
}
export default Friends;
