import React, { Component } from 'react';
import styled from 'styled-components';

import {
  ActionsBar,
  Button,
  Input
} from '../shared';

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`

const Position = styled.p`
  margin: 0;
  background-color: #d1d1f1;
  padding: 5px;

  &:nth-child(even) {
    background-color: #bfbfc5;
  }

  &:last-child {
    background-color: #b9b7fd;
    font-weight: bold;
    border: 2px solid #5d5d5d;

    &:before {
      margin-right: 10px;
      content: '->'
    }

    &:after {
      margin-left: 10px;
      content: '<-'
    }
  }
`

const InitialPosition = styled.p`
  margin: 0;
  background-color: #ebebf1;
  padding: 5px;
  border: 1px solid #5d5d5d;
`

export default class PositionList extends Component {
  render() {
    return (
      <Container>
        <InitialPosition>
          {`${this.props.initialPosition.x} ${this.props.initialPosition.y} ${this.props.initialPosition.direction}`}
        </InitialPosition>
        {
          this.props.positions.map((position, index) =>
            <Position key={index}>{`${position.x} ${position.y} ${position.direction}`}</Position>
          )
        }
      </Container>
    );
  }
}
