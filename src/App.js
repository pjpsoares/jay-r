import React, { Component } from 'react';
import BoardCreationForm from './board/board-creation-form';
import styled from 'styled-components';

import { Header, H1 } from './shared';

const AppContainer = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <H1>jayway robot coding challenge</H1>
        </Header>
        <main>
          <BoardCreationForm />
        </main>
      </AppContainer>
    );
  }
}

export default App;
