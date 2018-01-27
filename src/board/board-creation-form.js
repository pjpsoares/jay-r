import React, { Component } from 'react';
import { Input, Button, ActionsBar } from '../shared';

const MAX_WIDTH = 20;
const MAX_HEIGHT = 20;

class BoardCreationForm extends Component {

  constructor(props) {
    super(props);

    this.onWidthChange = this.onWidthChange.bind(this);
    this.onHeightChange = this.onHeightChange.bind(this);
    this.onRobotStartPositionXChange = this.onRobotStartPositionXChange.bind(this);
    this.onRobotStartPositionYChange = this.onRobotStartPositionYChange.bind(this);
    this.onRobotStartDirectionChange = this.onRobotStartDirectionChange.bind(this);

    this.state = {
      width: undefined,
      height: undefined,
      startX: undefined,
      startY: undefined,
      startDirection: undefined
    };
  }

  onWidthChange(event) {
    this.setState({ width: event.target.value });
  }

  onHeightChange(event) {
    this.setState({ height: event.target.value });
  }

  onRobotStartPositionXChange(event) {
    this.setState({ startX: event.target.value });
  }

  onRobotStartPositionYChange(event) {
    this.setState({ startY: event.target.value });
  }

  onRobotStartDirectionChange(event) {
    this.setState({ startDirection: event.target.value });
  }

  isValidForm() {
    return this.isValidWidth() &&
      this.isValidHeight() &&
      this.isValidStartX() &&
      this.isValidStartY() &&
      this.isValidStartDirection();
  }

  isValidWidth() {
    return this.state.width > 0 && this.state.width <= MAX_WIDTH;
  }

  isValidHeight() {
    return this.state.height > 0 && this.state.height <= MAX_HEIGHT;
  }

  isValidStartX() {
    return this.state.startX > 0 && this.state.startX <= this.state.width;
  }

  isValidStartY() {
    return this.state.startY > 0 && this.state.startY <= this.state.height;
  }

  isValidStartDirection() {
    return ['N', 'E', 'S', 'W'].indexOf(this.state.startDirection) > -1;
  }

  render() {
    return (
      <form>
        <h2>Configure the board</h2>
        <Input className={this.isValidWidth() ? '' : 'invalid'} onChange={this.onWidthChange} type="number" placeholder={`Width (max:${MAX_WIDTH})`} />
        <Input className={this.isValidHeight() ? '' : 'invalid'} onChange={this.onHeightChange} type="number" placeholder={`Height (max:${MAX_HEIGHT})`} />
        <h2>Configure the initial position</h2>
        <Input className={this.isValidStartX() ? '' : 'invalid'} onChange={this.onRobotStartPositionXChange} type="number" placeholder="X" />
        <Input className={this.isValidStartY() ? '' : 'invalid'} onChange={this.onRobotStartPositionYChange} type="number" placeholder="Y" />
        <Input className={this.isValidStartDirection() ? '' : 'invalid'} onChange={this.onRobotStartDirectionChange} type="text" placeholder="Direction (N,E,S,W)" />
        <ActionsBar>
          <Button disabled={!this.isValidForm()} type="submit">Submit</Button>
        </ActionsBar>
      </form>
    );
  }
}

export default BoardCreationForm;
