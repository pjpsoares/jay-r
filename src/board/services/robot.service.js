const RIGHT_MAP = {
  N: 'E',
  E: 'S',
  S: 'W',
  W: 'N'
}

const LEFT_MAP = {
  N: 'W',
  E: 'N',
  S: 'E',
  W: 'S'
}

class RobotService {
  /**
    * @param {Object} boardSize The board size
    * @param {number} boardSize.width The board width
    * @param {number} boardSize.height The board height
    * @param {Object} actualPosition The current position
    * @param {string} actualPosition.x The x of the position
    * @param {string} actualPosition.y The y of the position
    * @param {string} actualPosition.direction The direction it's heading
    * @param {string} instruction L for left, R for right, F for forward
    * @returns {Object} new position.
   */
  iterateState(board, actualPosition, instruction) {
    switch (instruction) {
      case 'L': return this.turnLeft(actualPosition);
      case 'R': return this.turnRight(actualPosition);
      case 'F': return this.moveForward(board, actualPosition);
      default: throw new Error('Invalid instruction. Only L, R or F is allowed.');
    }
  }

  /**
    * @param {Object} boardSize The board size
    * @param {number} boardSize.width The board width
    * @param {number} boardSize.height The board height
    * @param {Object} actualPosition The current position
    * @param {string} actualPosition.x The x of the position
    * @param {string} actualPosition.y The y of the position
    * @param {string} actualPosition.direction The direction it's heading
    * @param {string[]} instructions Multiple instructions L for left, R for right, F for forward
    * @returns {Object[]} all the positions regarding the instructions.
   */
  multipleIterationOfState(board, actualPosition, instructions) {
    return this.multipleIterationOfStateWithAcc(board, actualPosition, instructions, []);
  }

  multipleIterationOfStateWithAcc(board, actualPosition, instructions, accumulator) {
    if (!instructions || !instructions.length) {
      return accumulator;
    }

    const nextPosition = this.iterateState(board, actualPosition, instructions[0]);
    return this.multipleIterationOfStateWithAcc(
      board,
      nextPosition,
      instructions.slice(1),
      [...accumulator, nextPosition]
    );
  }

  turnLeft(actualPosition) {
    const newDirection = LEFT_MAP[actualPosition.direction];
    return {
      ...actualPosition,
      direction: newDirection
    }
  }

  turnRight(actualPosition) {
    const newDirection = RIGHT_MAP[actualPosition.direction];
    return {
      ...actualPosition,
      direction: newDirection
    }
  }

  moveForward(board, actualPosition) {
    switch (actualPosition.direction) {
      case 'N':
        return {
          ...actualPosition,
          y: actualPosition.y === 0 ? 0 : actualPosition.y - 1
        };
      case 'S':
        return {
          ...actualPosition,
          y: actualPosition.y === board.height - 1 ? actualPosition.y : actualPosition.y + 1
        };
      case 'W':
        return {
          ...actualPosition,
          x: actualPosition.x === 0 ? 0 : actualPosition.x - 1
        };
      case 'E':
        return {
          ...actualPosition,
          x: actualPosition.x === board.width - 1 ? actualPosition.x : actualPosition.x + 1
        };
      default: throw new Error('Invalid direction.');
    }
  }
}

export const robotService = new RobotService();