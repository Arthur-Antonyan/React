import { NavLink } from 'react-router-dom';

export function User(props) {
  return (
    <div className={props.className}>
      <NavLink to={'/dialogs/' + props.path}>{props.name}</NavLink>
    </div>
  );
}

export function Messages(props) {
  return <div className={props.className}>{props.message}</div>;
}
