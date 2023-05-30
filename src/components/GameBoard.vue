<script setup lang="ts">
import { BoardItem } from '../models/BoardItem';
import GridItem from './GridItem.vue';
import { clearGameFromStorage } from '../functions/localStorage';
import { Game } from '../models/Game';
import { computed } from 'vue';

interface IGameBoardProps {
  currentGame: Game,
  gameBoard: BoardItem[]
}

const emit = defineEmits<{ 
  (e: 'gameboard', board: BoardItem[]) :void,
}> ();

const props = defineProps<IGameBoardProps>();

const currentPlayerName = computed(() => {
  if (props.currentGame && props.currentGame.players[props.currentGame.currentPlayerIndex]) {
    return props.currentGame.players[props.currentGame.currentPlayerIndex].name;
  } 
  return '';
});

const handlePiecePlacement = (id: string) => {
  let newGameBoardValue = props.gameBoard.map((item) => {
    if (item.id == id) {
      item.placedPiece = props.currentGame.players[props.currentGame.currentPlayerIndex].GamePiece;
      return item;
    }
    return item;
  });

  props.currentGame.nextTurn();
  emit('gameboard', newGameBoardValue);
}



const reset = () => {
  //clearGameFromStorage();
  location.reload();
}

</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">

    <!-- <div  class="grid grid-cols-1 grid-rows-2 w-1/2 min-w-fit absolute top-6 right-0">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.GamePiece"></PlayerView>
    </div> -->
      <h1
        class="text-lg mb-4 mx-8 px-6"
        >
        {{ 'It is your turn, ' + currentPlayerName + '!' }}
        </h1>
    <div class="grid grid-rows-3 grid-cols-3 w-full max-w-[328px] md:max-w-xl px-4 gap-1 md:gap-2 mb-4">
      <GridItem @place-piece="handlePiecePlacement" v-for="item in gameBoard" :key="item.id" :board-item="item"></GridItem>
    </div>

    <button @click="reset" class="btn mt-2">Reset</button>
  </div>
</template>
