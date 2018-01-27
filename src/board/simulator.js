import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { robotService } from './services/robot.service';
import {
  ActionsBar,
  Button,
  Input
} from '../shared';
import PositionList from './position-list';

const Container = styled.div`
  height: 100%;
`

const BoardContainer = styled.div`
  height: calc(100% - 51px - 51px);
`

export default class Simulator extends Component {

  constructor(props) {
    super(props);

    const search = props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);

    this.state = {
      initialPosition: {
        x: parseInt(params.get('x', 10)),
        y: parseInt(params.get('y', 10)),
        direction: params.get('d', 10)
      },
      board: {
        width: parseInt(params.get('w', 10)),
        height: parseInt(params.get('h', 10))
      },
      instructions: '',
      positions: []
    };

    this.onInstructionsChange = this.onInstructionsChange.bind(this);
  }

  onInstructionsChange(event) {
    const instructionsArray = event.target.value.split('');

    this.setState({
      instructions: event.target.value,
      positions: robotService.multipleIterationOfState(
        this.state.board, this.state.initialPosition, instructionsArray
      )
    });
  }

  render() {
    return (
      <Container>
        <ActionsBar>
          <Input value={this.state.instructions} onChange={this.onInstructionsChange} type="text" placeholder="instructions" />
        </ActionsBar>
        <BoardContainer>
          <PositionList initialPosition={this.state.initialPosition} positions={this.state.positions} />
        </BoardContainer>
        <ActionsBar>
          <Link to="/">
            <Button >Pick a new board</Button>
          </Link>
        </ActionsBar>
      </Container>
    );
  }
}
