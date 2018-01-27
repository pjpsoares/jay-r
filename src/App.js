import React, { Component } from 'react';
import BoardCreationForm from './board/board-creation-form';
import Simulator from './board/simulator';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Header, H1 } from './shared';

const AppContainer = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Header>
            <H1>jayway robot coding challenge</H1>
          </Header>
          <main>
            <Route exact path="/" component={BoardCreationForm} />
            <Route path="/simulation" component={Simulator} />
          </main>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
