import React, { HTMLAttributes } from 'react';

interface SearchProps extends HTMLAttributes<HTMLInputElement> {
  count?: number;
};

export default class SearchComponent extends React.Component<SearchProps> {


  componentDidMount(){
  
  }
   


  render() {
    return (
      <div>Test {this.props.count}</div>
    );
  }
}

