import { robotService } from './robot.service';

describe('#iterateState', () => {
  it('should throw an error for invalid instruction', () => {
    expect(() => {
      robotService.iterateState(
        {
          x: 3,
          y: 3,
          direction: 'S'
        },
        'X'
      );
    })
      .toThrow(new Error('Invalid instruction. Only L, R or F is allowed.'));
  })

  it('should remain in the same place if he tries to move to the North and its not possible', () => {
    const initialPosition = {
      x: 3,
      y: 0,
      direction: 'N'
    };
    const board = {
      width: 10,
      height: 10
    }

    expect(robotService.iterateState(board, initialPosition, 'F'))
      .toEqual(initialPosition);
  });

  it('should remain in the same place if he tries to move to the West and its not possible', () => {
    const initialPosition = {
      x: 0,
      y: 3,
      direction: 'W'
    };
    const board = {
      width: 10,
      height: 10
    }

    expect(robotService.iterateState(board, initialPosition, 'F'))
      .toEqual(initialPosition);
  });

  it('should remain in the same place if he tries to move to the South and its not possible', () => {
    const initialPosition = {
      x: 3,
      y: 3,
      direction: 'S'
    };
    const board = {
      width: 10,
      height: 4
    }

    expect(robotService.iterateState(board, initialPosition, 'F'))
      .toEqual(initialPosition);
  });

  it('should remain in the same place if he tries to move to the East and its not possible', () => {
    const initialPosition = {
      x: 3,
      y: 3,
      direction: 'E'
    };
    const board = {
      width: 4,
      height: 10
    }

    expect(robotService.iterateState(board, initialPosition, 'F'))
      .toEqual(initialPosition);
  });

  describe('with initial position 3,3,S and a bigger board to move', () => {
    let initialPosition;
    let board;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'S'
      };
      board = {
        width: 10,
        height: 10
      };
    });

    it('with F it should go to 3,4,S', () => {
      expect(robotService.iterateState(board, initialPosition, 'F'))
        .toEqual({ x: 3, y: 4, direction: 'S' });
    });

    it('with R it should go to 3,3,W', () => {
      expect(robotService.iterateState(board, initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'W' });
    });

    it('with L it should go to 3,3,E', () => {
      expect(robotService.iterateState(board, initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'E' });
    });
  });

  describe('with initial position 3,3,W and a bigger board to move', () => {
    let initialPosition;
    let board;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'W'
      };
      board = {
        width: 10,
        height: 10
      };
    });

    it('with F it should go to 2,3,W and a bigger board to move', () => {
      expect(robotService.iterateState(board, initialPosition, 'F'))
        .toEqual({ x: 2, y: 3, direction: 'W' });
    });

    it('with R it should go to 3,3,N', () => {
      expect(robotService.iterateState(board, initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'N' });
    });

    it('with L it should go to 3,3,S', () => {
      expect(robotService.iterateState(board, initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'S' });
    });
  });

  describe('with initial position 3,3,N and a bigger board to move', () => {
    let initialPosition;
    let board;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'N'
      };
      board = {
        width: 10,
        height: 10
      };
    });

    it('with F it should go to 3,2,N', () => {
      expect(robotService.iterateState(board, initialPosition, 'F'))
        .toEqual({ x: 3, y: 2, direction: 'N' });
    });

    it('with R it should go to 3,3,E', () => {
      expect(robotService.iterateState(board, initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'E' });
    });

    it('with L it should go to 3,3,W', () => {
      expect(robotService.iterateState(board, initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'W' });
    });
  });

  describe('with initial position 3,3,E and a bigger board to move', () => {
    let initialPosition;
    let board;

    beforeEach(() => {
      initialPosition = {
        x: 3,
        y: 3,
        direction: 'E'
      };
      board = {
        width: 10,
        height: 10
      };
    });

    it('with F it should go to 4,3,E', () => {
      expect(robotService.iterateState(board, initialPosition, 'F'))
        .toEqual({ x: 4, y: 3, direction: 'E' });
    });

    it('with R it should go to 3,3,S', () => {
      expect(robotService.iterateState(board, initialPosition, 'R'))
        .toEqual({ x: 3, y: 3, direction: 'S' });
    });

    it('with L it should go to 3,3,N', () => {
      expect(robotService.iterateState(board, initialPosition, 'L'))
        .toEqual({ x: 3, y: 3, direction: 'N' });
    });
  });
});

describe('#multipleIterationOfState', () => {
  describe('with initial position 1,2,N and a 5x5 board', () => {
    let initialPosition;
    let board;

    beforeEach(() => {
      initialPosition = {
        x: 1,
        y: 2,
        direction: 'N'
      };
      board = {
        width: 5,
        height: 5
      };
    });

    describe('with the instructions RFRFFRFRF', () => {
      const instructions = 'RFRFFRFRF'.split('');
      let result;

      beforeEach(() => {
        result = robotService.multipleIterationOfState(board, initialPosition, instructions);
      });

      it('should end in 1,3,N', () => {
        expect(result[result.length - 1])
          .toEqual({
            x: 1,
            y: 3,
            direction: 'N'
          })
      });

      it('should have 9 states in the response', () => {
        expect(result.length).toBe(9);
      });
    });
  });

  describe('with initial position 1,2,N and a 5x5 board', () => {
    let initialPosition;
    let board;

    beforeEach(() => {
      initialPosition = {
        x: 0,
        y: 0,
        direction: 'E'
      };
      board = {
        width: 5,
        height: 5
      };
    });

    describe('with the instructions RFLFFLRF', () => {
      const instructions = 'RFLFFLRF'.split('');
      let result;

      beforeEach(() => {
        result = robotService.multipleIterationOfState(board, initialPosition, instructions);
      });

      it('should end in 1,3,N', () => {
        expect(result[result.length - 1])
          .toEqual({
            x: 3,
            y: 1,
            direction: 'E'
          })
      });

      it('should have 8 states in the response', () => {
        expect(result.length).toBe(8);
      });
    });
  });
});
