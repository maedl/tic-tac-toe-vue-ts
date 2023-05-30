<script setup lang="ts">
import { ref } from 'vue';
import SelectPlayers from './SelectPlayers.vue';
import GameBoard from './GameBoard.vue';
import { saveGameToStorage } from '../functions/localStorage';
import { BoardItem } from '../models/BoardItem';
import { Player } from '../models/Player';
import { Game } from '../models/Game';

const GRID_LENGTH: number = 9;

const gameIsActive = ref<boolean>(false);
const activeGame = ref<Game>(new Game([],[], 0));
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
    startGame(activePlayers.value, gameBoard.value);
    gameIsActive.value = true;
  }
}

const startGame = (players: Player[], board: BoardItem[]) => {
  const randomIndex = Math.floor(Math.random() * 2);
  activeGame.value = new Game(players, board, randomIndex);
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

const handleGameState = () => {

}

</script>

<template>

  <div>
    <SelectPlayers 
      :players="activePlayers" 
      @add-player="handlePlayersState" 
      v-if="!gameIsActive" 
    />
    <GameBoard 
      :game-board="gameBoard" 
      :current-game="activeGame"
      @gameboard="handleGameState"
    ></GameBoard>
  </div>
</template>


