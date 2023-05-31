<script setup lang="ts">
import { ref } from 'vue';
import SelectPlayers from './SelectPlayers.vue';
import GameBoard from './GameBoard.vue';
import { saveGameToStorage } from '../functions/localStorage';
import { BoardItem } from '../models/BoardItem';
import { Player } from '../models/Player';
import { Game, gameEndType } from '../models/Game';
import { GRID_LENGTH } from "../models/solutions";
import ResetButton from './ResetButton.vue';

const gameIsActive = ref<boolean>(false);
const activeGame = ref<Game>(new Game([],[], 0, GRID_LENGTH));
const gameBoard = ref<BoardItem[] >([]);
const activePlayers = ref<Player[]>([]);

// onMounted(() => {
//   checkForActiveGame()
// })

const createGameBoard = () => {
  for (let i = 0; i < GRID_LENGTH; i++) {
    gameBoard.value = [
      ...gameBoard.value,
      new BoardItem(i, i.toString())
  ];
  }
}

// const checkForActiveGame = () => {
//   console.log('hello')
//   const storageCheck: Game | null = getGameFromStorage();

//   if (storageCheck === null) {
//     return gameIsActive.value = false;
//   }
//   else {
//     resumeGame(storageCheck)
//   }
  
// }

const handlePlayersState = (newPlayers: Player[]) => {
  activePlayers.value = newPlayers;
  if (activePlayers.value.length == 2) {
    createGameBoard();
    startNewGame(activePlayers.value, gameBoard.value, GRID_LENGTH);
    gameIsActive.value = true;
  }
}

const startNewGame = (players: Player[], board: BoardItem[], turnCount:number) => {
  const randomIndex = Math.floor(Math.random() * 2);
  activeGame.value = new Game(players, board, randomIndex, turnCount);
}

// const resumeGame = (game: Game) => {
//   activeGame.value = new Game(game.players, game.board);
//   gameIsActive.value = true;
// }

const saveGameBoard = (board: BoardItem[]) => {
  if (activeGame.value) {
    activeGame.value.board = board;
    saveGameToStorage(activeGame.value)
  }
  
}

const handleGameState = (updatedBoard: BoardItem[]) => {
  const activeIndex = activeGame.value.currentPlayerIndex;
  const activeTurnCount = activeGame.value.turnCount
  activeGame.value = new Game(activePlayers.value, updatedBoard, activeIndex, activeTurnCount);

  activeGame.value.checkSolution();

  if(activeGame.value.gameOver) {
    return gameOver(gameEndType.win);
  }

  if (activeGame.value.turnCount == 0) {
    gameOver(gameEndType.draw);
  }
}

const gameOver = (endType: gameEndType) => {
  switch (endType) {
    case gameEndType.win:
      activeGame.value.nextTurn();
      const winnerIndex = activeGame.value.currentPlayerIndex
      activeGame.value.players[winnerIndex].incrementScore();
      console.log(activeGame.value.players);
    break;
    case gameEndType.draw:
      activeGame.value.gameOver = true;
    break;
    default:
    break;
  }
}

</script>

<template>

  <div v-if="!activeGame.gameOver">

    <SelectPlayers 
      :players="activePlayers" 
      @add-player="handlePlayersState" 
      v-if="!gameIsActive" 
    />
    <GameBoard 
      v-else
      :current-game="activeGame"
      @gameboard="handleGameState"
    />

  </div>
  <div v-else>

    <ResetButton />
    
  </div>
</template>
