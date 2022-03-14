import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser, getUserSuper } from '../../../redux/postsSelector';
import StoreContext from '../../../storeContext';
import styles from './Users.module.css';

function UserContainer(props) {
  let users = props.users;
  console.log('render');
  return users.map((item) => (
    <div key={item.path} className={styles.user}>
      <img src={item.img} alt="ava" />
      <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
    </div>
  ));
}

const mapStateToProps = (state) => {
  console.log('map');
  return {
    // users: state.MessagePage.user
    users: getUserSuper(state),
  };
};
export default connect(mapStateToProps)(UserContainer);
