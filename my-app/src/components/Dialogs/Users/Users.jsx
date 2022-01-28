import { NavLink } from 'react-router-dom';

export function User(props) {
  // return (
  //   <div className={props.className}>
  //     <NavLink to={'/dialogs/' + props.path}>{props.name}</NavLink>
  //   </div>
  // );
  return props.users.map((item) => (
    <div>
      <NavLink to={'/dialogs/' + item.path}>{item.name}</NavLink>
    </div>
  ));
}
