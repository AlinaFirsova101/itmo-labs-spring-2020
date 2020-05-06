/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component as C } from 'react';

class Counter extends C {
  constructor(props) {
    super();
    this.state = {
      stars: 0,
    };
    this.plus = this.plus.bind(this);
  }

  componentWillReceiveProps(nextPrors) {
    const { stars } = nextPrors;
    this.setState({ stars });
  }
  plus() {
    let { stars } = this.state;
    stars += 1;
    this.setState({ stars });
  }
  render() {
    console.log(this.state.stars);
    const star = '⭐';
    return (
      <div>
        <button onClick={this.plus}> <span aria-label="plus" role="img">➕</span></button>
        <span aria-label="star" role="img">{ star.repeat(this.state.stars) }</span>
      </div>);
  }
}

export default Counter;
