import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './MyPosts.module.css';
import MyStatus from './MyStatus';
import MyStatusHook from './MyStatusHook';

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
      <MyStatusHook status={props.status} setStatus={props.setStatus} />
      <div>
        <img
          className={styles.img}
          src={props.profile.photos.small || `https://img.lovepik.com/element/45001/3052.png_860.png`}
        />
      </div>
    </div>
  );
};
export default MyPosts;
