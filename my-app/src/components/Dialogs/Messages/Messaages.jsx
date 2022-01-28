export function Messages(props) {
  // let message = props.messages.map((item) => item.message);
  // return <div className={props.className}>{message}</div>;
  return props.messages.map((item) => <div>{item.message}</div>);
}
