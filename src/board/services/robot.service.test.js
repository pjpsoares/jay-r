import { robotService } from './robot.service';

describe('#iterateState', () => {
  describe('with initial position 3,3,S', () => {
    let initialPosition;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'S'
      };
    });

    it('with F it should go to 3,4,S', () => {
      expect(robotService.iterateState(initialPosition, 'F'))
        .toEqual({ x: 3, y: 4, direction: 'S' });
    });

    it('with R it should go to 3,3,W', () => {
      expect(robotService.iterateState(initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'W' });
    });

    it('with L it should go to 3,3,E', () => {
      expect(robotService.iterateState(initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'E' });
    });
  });

  describe('with initial position 3,3,W', () => {
    let initialPosition;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'W'
      };
    });

    it('with F it should go to 2,3,W', () => {
      expect(robotService.iterateState(initialPosition, 'F'))
        .toEqual({ x: 2, y: 3, direction: 'W' });
    });

    it('with R it should go to 3,3,N', () => {
      expect(robotService.iterateState(initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'N' });
    });

    it('with L it should go to 3,3,S', () => {
      expect(robotService.iterateState(initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'S' });
    });
  });

  describe('with initial position 3,3,N', () => {
    let initialPosition;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'N'
      };
    });

    it('with F it should go to 3,2,N', () => {
      expect(robotService.iterateState(initialPosition, 'F'))
        .toEqual({ x: 3, y: 2, direction: 'N' });
    });

    it('with R it should go to 3,3,E', () => {
      expect(robotService.iterateState(initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'E' });
    });

    it('with L it should go to 3,3,W', () => {
      expect(robotService.iterateState(initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'W' });
    });
  });

  describe('with initial position 3,3,E', () => {
    let initialPosition;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'E'
      };
    });

    it('with F it should go to 4,3,E', () => {
      expect(robotService.iterateState(initialPosition, 'F'))
        .toEqual({ x: 4, y: 3, direction: 'E' });
    });

    it('with R it should go to 3,3,S', () => {
      expect(robotService.iterateState(initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'S' });
    });

    it('with L it should go to 3,3,N', () => {
      expect(robotService.iterateState(initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'N' });
    });
  });
});
