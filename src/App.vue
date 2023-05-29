<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SelectPlayers from './components/SelectPlayers.vue';
import GameBoard from './components/GameBoard.vue';
import { getGameFromStorage, saveGameToStorage } from './functions/localStorage';
import { Player } from './models/Player';
import { Game } from './models/Game';
import { BoardItem } from './models/BoardItem';

const gameIsActive = ref<boolean>();
const activeGame = ref<Game>(new Game([],[]));

onMounted(() => {
  checkForActiveGame()
})

const checkForActiveGame = () => {
  console.log('hello')
  const storageCheck: Game | null = getGameFromStorage();

  if (storageCheck === null) {
    return gameIsActive.value = false;
  }
  else {
    resumeGame(storageCheck)
  }
  
}

const gameFull = (players: Player[]) => {
  gameIsActive.value = true;
  startGame(players);
}

const startGame = (players: Player[]) => {
  activeGame.value = new Game(players, []);
}

const resumeGame = (game: Game) => {
  activeGame.value = new Game(game.players, game.board);
  gameIsActive.value = true;
}

const saveGameBoard = (board: BoardItem[]) => {
  if (activeGame.value) {
    activeGame.value.board = board;
    saveGameToStorage(activeGame.value)
  }
  
}

</script>

<template>

  <SelectPlayers @max-players="gameFull" v-if="!gameIsActive" />
  <GameBoard :resumedGame="gameIsActive" @gameboard="saveGameBoard" v-else :initialBoard="gameIsActive ? activeGame.board || null : null" />
 
</template>
