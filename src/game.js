import Player from './factory/player';

const game = (() => {
  let loadUI;
  const initPlayer = (isAI=false) => {
    const player = new Player(isAI);

    player.board.placeShip([[0,1], [0,2], [0,3], [0,4], [0,5]]);
    player.board.placeShip([[3,5], [3,6], [3,7], [3,8]]);
    player.board.placeShip([[6,3], [6,4], [6,5]]);
    player.board.placeShip([[8,8], [8,9]]);
    player.board.placeShip([[9, 5], [9,6]]);

    return player;
  }
  const activateBoard = (player, opponent) => {
    const board = document.getElementsByClassName('grid')[1];

    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        const square = board.children[i * 10 + j];
        square.addEventListener('click', () => {
          const opponentBoard = opponent.board.values;
          if(opponentBoard[i][j] == 0){
            const newBoard = player.attack(i, j, opponent.board);

            opponent.setBoard = newBoard;

            playerTurn(opponent, player);
          }
        });
      }
    }
  }

  const checkVictoryCondition = (player) => {
    const modal = document.getElementsByClassName('modal')[0];
    const msg = document.getElementById('result-message');
    if(player.board.numberOfShips === 0){
      if(player.isAI) msg.textContent = 'You win!'
      else msg.textContent = 'You lose!';
      modal.style.display = 'block';
    }
  }

  const playerTurn = (currentPlayer, nextPlayer) => {
    if(currentPlayer.isAI){
      loadUI(nextPlayer, currentPlayer);
      checkVictoryCondition(currentPlayer);
      const newBoard = currentPlayer.autoAttack(nextPlayer.board);

      nextPlayer.setBoard = newBoard;
      playerTurn(nextPlayer, currentPlayer);
    }
    else{
      loadUI(currentPlayer, nextPlayer);
      checkVictoryCondition(currentPlayer);
      activateBoard(currentPlayer, nextPlayer);
    }
  }

  const start = (p1, p2, load) => {
    loadUI = load;
    playerTurn(p1, p2);
  }

  return {start, initPlayer};
})();

export default game;