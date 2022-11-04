import Player from "../factory/player";

describe('Player methods', () => {
  let player, computer;
  beforeAll(() => {
    player = new Player();
    computer = new Player(true);
  });
  test('Player attacks Computer', () => {
    player.attack(0, 0, computer.board);
    expect(player.atkPositions.length).toBe(1);
  });
  test('Computer attacks player randomly', () => {
    computer.autoAttack(player.board);
    expect(computer.atkPositions.length).toBe(1);
  });
  test('Board is refreshed after attack', () => {
    computer.board.placeShip([[0,2]]);
    const newBoard = player.attack(0, 2, computer.board);
    computer.setBoard = newBoard;

    expect(computer.board.numberOfShips).toBe(0);
  });
})