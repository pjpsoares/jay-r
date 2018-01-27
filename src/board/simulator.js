import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import {
  ActionsBar,
  Button,
  Input
} from '../shared';

const Container = styled.div`
  height: 100%;
`

const BoardContainer = styled.div`
  height: calc(100% - 51px - 51px);
`

export default class Simulator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ActionsBar>
          <Input type="text" placeholder="instructions" />
        </ActionsBar>
        <BoardContainer>
          som
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
