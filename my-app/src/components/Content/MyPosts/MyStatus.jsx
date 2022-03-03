import React from 'react';

import styles from './MyPosts.module.css';

class MyStatus extends React.Component {
  state = {
    reductMode: false,
  };

  activate() {
    this.setState({ reductMode: true });
  }
  deActivate() {
    this.setState({ reductMode: false });
  }

  render() {
    return (
      <div className={styles.status}>
        {!this.state.reductMode && (
          <div>
            <span onClick={() => this.activate.bind(this)()}>{this.props.value}</span>
          </div>
        )}
        {this.state.reductMode && (
          <div>
            <input autoFocus={true} onBlur={() => this.deActivate.bind(this)()} value={this.props.value} />
          </div>
        )}
      </div>
    );
  }
}
export default MyStatus;
