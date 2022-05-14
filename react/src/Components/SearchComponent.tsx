import React from 'react';


export default class SearchComponent extends React.Component {
  state = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>Count: {this.state.count}</div>

    );
  }
}

