import React, { Component } from 'react';
import { Input, Button, ActionsBar } from '../shared';

class BoardCreationForm extends Component {
  isValidForm() {
    return false;
  }

  render() {
    return (
      <form>
        <h2>Configure the board</h2>
        <Input type="number" placeholder="Width" />
        <Input type="number" placeholder="Height" />
        <h2>Configure the initial position</h2>
        <Input type="number" placeholder="X" />
        <Input type="number" placeholder="Y" />
        <Input type="text" placeholder="Direction (N,E,S,W)" />
        <ActionsBar>
          <Button disabled={!this.isValidForm()} type="submit">Submit</Button>
        </ActionsBar>
      </form>
    );
  }
}

export default BoardCreationForm;
