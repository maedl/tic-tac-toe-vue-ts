<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BoardItem } from '../models/BoardItem';
import { GamePiece, Player } from '../models/Player';
import PlayerView from './PlayerView.vue';
import GridItem from './GridItem.vue';
import { clearGameFromStorage } from '../functions/localStorage';


interface IGameBoardProps {
  gameBoard: BoardItem[]
}

const emit = defineEmits<{ 
  (e: 'gameboard', board: BoardItem[]) :void,
}> ();

const props = defineProps<IGameBoardProps>();


const handlePiecePlacement = (id: string) => {
  console.log(id);
   let newGameBoardValue = props.gameBoard.map((item) => {
    if (item.id == id) {
      item.placedPiece = GamePiece.X;
      return item
    }
    return item
  })
  emit('gameboard', newGameBoardValue)
}

const reset = () => {
  clearGameFromStorage();
  location.reload();
}

</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">

    <!-- <div  class="grid grid-cols-1 grid-rows-2 w-1/2 min-w-fit absolute top-6 right-0">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.GamePiece"></PlayerView>
    </div> -->
      
    <div class="grid grid-rows-3 grid-cols-3 w-full max-w-[328px] md:max-w-xl px-4 gap-1 md:gap-2">
      <GridItem @place-piece="handlePiecePlacement" v-for="item in gameBoard" :key="item.id" :board-item="item"></GridItem>
    </div>

    <button @click="reset" class="btn mt-2">Reset</button>
  </div>
</template>
