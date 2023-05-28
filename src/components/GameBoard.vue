<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div  class="grid grid-cols-1 grid-rows-2 w-1/2 min-w-fit absolute top-6 right-0">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.GamePiece"></PlayerView>
    </div>
      
    <div class="grid grid-rows-3 grid-cols-3 w-full max-w-xl px-4 gap-1 md:gap-2">
      <GridItem v-for="item in gameBoard"></GridItem>
    </div>

    <button @click="clearStorage" class="btn mt-2">Clear storage</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { clearPlayersFromStorage, getPlayersFromStorage } from '../functions/localStorage'
import { BoardItem } from '../models/BoardItem';
import { Player } from '../models/Player';
import PlayerView from './PlayerView.vue';
import GridItem from './GridItem.vue';

const GRID_LENGTH: number = 9;
const activePlayers: Player[] | null = getPlayersFromStorage();
const gameBoard = ref<BoardItem[] >([]);

onMounted(() => {
  createGameBoard();
})

const createGameBoard = () => {
  let board: BoardItem[] = [];

  for (let i = 0; i < GRID_LENGTH; i++) {
    const item: BoardItem = new BoardItem(i);
    board.push(item)
  }
  gameBoard.value = board;
}

const clearStorage = () => {
  clearPlayersFromStorage();
}

</script>

<style lang="scss" scoped>

</style>