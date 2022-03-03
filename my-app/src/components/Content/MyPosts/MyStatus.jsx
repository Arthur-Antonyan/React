import React from 'react';

import styles from './MyPosts.module.css';

class MyStatus extends React.Component {
  state = {
    reductMode: false,
    status: this.props.status,
  };

  activate = () => {
    this.setState({ reductMode: true });
  };
  deActivate = () => {
    this.setState({ reductMode: false });
    this.props.setStatus(this.state.status);
  };
  onStatusChange = (event) => {
    this.setState({ status: event.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.status != prevProps.status)
      this.setState({
        status: this.props.status,
      });
  }

  render() {
    return (
      <div className={styles.status}>
        {!this.state.reductMode && (
          <div>
            <span onDoubleClick={this.activate}>{this.props.status || 'no status'}</span>
          </div>
        )}
        {this.state.reductMode && (
          <div>
            <input autoFocus={true} onBlur={this.deActivate} value={this.state.status} onChange={this.onStatusChange} />
          </div>
        )}
      </div>
    );
  }
}
export default MyStatus;
