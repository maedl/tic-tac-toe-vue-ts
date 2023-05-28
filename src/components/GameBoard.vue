<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div  class="grid grid-cols-1 grid-rows-2 w-1/2 min-w-fit absolute top-6 right-0">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.GamePiece"></PlayerView>
    </div>
      
    <div class="grid grid-rows-3 grid-cols-3 w-full max-w-[328px] md:max-w-xl px-4 gap-1 md:gap-2">
      <GridItem @place-piece="handlePiecePlacement" v-for="item in gameBoard" :key="item.id" :board-item="item"></GridItem>
    </div>

    <button @click="reset" class="btn mt-2">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { clearPlayersFromStorage, getPlayersFromStorage } from '../functions/localStorage'
import { BoardItem } from '../models/BoardItem';
import { GamePiece, Player } from '../models/Player';
import PlayerView from './PlayerView.vue';
import GridItem from './GridItem.vue';

const GRID_LENGTH: number = 9;
const activePlayers: Player[] | null = getPlayersFromStorage();
const gameBoard = ref<BoardItem[] >([]);

onMounted(() => {
  createGameBoard();
})

const createGameBoard = () => {
  for (let i = 0; i < GRID_LENGTH; i++) {
    gameBoard.value = [
      ...gameBoard.value,
      new BoardItem(i, i.toString())
  ];
  }
}

const handlePiecePlacement = (id: string) => {
  console.log(id);
  gameBoard.value = gameBoard.value.map((item) => {
    if (item.id == id) {
      item.placedPiece = GamePiece.X;
      return item
    }
    return item
  })
  console.log(gameBoard.value)
}

const reset = () => {
  clearPlayersFromStorage();
  location.reload();
}

</script>
