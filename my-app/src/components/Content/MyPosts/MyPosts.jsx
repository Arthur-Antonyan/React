import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.content}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png" />
        </div>
      </div>
      <div>
        <img src={props.profile.photos.small} />
      </div>
    </div>
  );
};
export default MyPosts;
