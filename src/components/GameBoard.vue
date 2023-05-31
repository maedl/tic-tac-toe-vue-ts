<script setup lang="ts">
import { BoardItem } from '../models/BoardItem';
import GridItem from './GridItem.vue';
import { clearGameFromStorage } from '../functions/localStorage';
import { Game, gameEndType } from '../models/Game';
import { computed } from 'vue';
import { GamePiece } from '../models/Player';
import ResetButton from './ResetButton.vue';

interface IGameBoardProps {
  currentGame: Game,
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

  if (props.currentGame.board[Number(id)].placedPiece != GamePiece.EMPTY) {
    return;
  }
  
  let newGameBoardValue = props.currentGame.board.map((item) => {
    if (item.id == id) {
      item.placedPiece = props.currentGame.players[props.currentGame.currentPlayerIndex].GamePiece;
      return item;
    }
    return item;
  });

    props.currentGame.nextTurn();
    emit('gameboard', newGameBoardValue);

}

</script>

<template>
  <div 
    class="h-screen flex flex-col justify-center items-center"
  >

    <!-- <div  class="grid grid-cols-1 grid-rows-2 w-1/2 min-w-fit absolute top-6 right-0">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.GamePiece"></PlayerView>
    </div> -->
      <h1
        class="text-xl mb-4 mx-8 px-6"
        >
        {{ 'It is your turn, ' + currentPlayerName + '!' }}
        </h1>
    <div class="grid grid-rows-3 grid-cols-3 w-full max-w-[328px] md:max-w-xl px-4 gap-1 md:gap-2 mb-4">
      <GridItem @place-piece="handlePiecePlacement" v-for="item in currentGame.board" :key="item.id" :board-item="item"></GridItem>
    </div>

    <ResetButton />
  </div>
</template>
