import React, { Component } from 'react';
import BoardCreationForm from './board/board-creation-form';
import Simulator from './board/simulator';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Header, H1, Main } from './shared';

const AppContainer = styled.div`
  text-align: center;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Header>
            <H1>jayway robot coding challenge</H1>
          </Header>
          <Main>
            <Route exact path="/" component={BoardCreationForm} />
            <Route path="/simulation" component={Simulator} />
          </Main>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
