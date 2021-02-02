
import React from 'react';
import { SquareProps } from './square.props';
import { SquareState } from './square.state';

export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props)
        this.state = {
            value: null
        }
    }
    render() {
      return (
        <button className="square" onClick={() => { alert('click')}}>
            {this.state.value}
        </button>
      );
    }
  }