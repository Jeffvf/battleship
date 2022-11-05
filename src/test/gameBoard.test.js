import gameBoard from '../factory/gameBoard';

describe('Game board functions', () => {
  let board;
  beforeAll(() => {
    board = new gameBoard();
  })
  test('Number of ships placed', () => {
    board.placeShip([[0,1], [0,2]]);
    expect(board.numberOfShips).toBe(1);
  });
  test('Insert ship on already occupied coordinates', () => {
    board.placeShip([[0,1], [0,2], [0,3]])
    expect(board.numberOfShips).toBe(1);
  });
  test('Attack misses', () => {
    expect(board.receiveAttack(0, 3)).toStrictEqual(false);
  });
  test('Attack hits ship', () => {
    expect(board.receiveAttack(0, 1)).toStrictEqual(true);
  });
  test('Insert multiple ships', () => {
    board.placeShip([[3,5], [3,6], [3,7], [3,8]]);
    board.placeShip([[6,3], [6,4], [6,5]]);
    expect(board.numberOfShips).toBe(3);
  })
})