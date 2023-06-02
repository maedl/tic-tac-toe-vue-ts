<script setup lang="ts">
import { BoardItem } from '../models/BoardItem';
import GridItem from './GridItem.vue';
import { Game } from '../models/Game';
import { computed } from 'vue';
import { GamePiece } from '../models/Player';
import ResetButton from './ResetButton.vue';

interface IGameBoardProps {
  currentGame: Game,
}

const emit = defineEmits<{ 
  (e: 'gameboard', board: BoardItem[]) :void,
  (e: 'play-again'): void,
  (e: 'show-score'): void
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
    class="h-full flex flex-col justify-center items-center"
  >
    <h1
      v-if="!props.currentGame.gameOver"
      class="text-xl mb-4 mx-8 px-6"
    >
      {{ 'It is your turn, ' + currentPlayerName + '!' }}
    </h1>
    <div v-else>
      <h1 v-if="props.currentGame.isDraw"
        class="text-xl mb-4 mx-8 px-6"
      >
        Draw!
      </h1>
      <h1 v-else
      class="text-xl mb-4 mx-8 px-6"
      >
        {{ currentPlayerName + ' wins!' }}
      </h1>
    </div>

    <div class="grid grid-rows-3 grid-cols-3 w-full max-w-[328px] md:max-w-xl px-4 gap-1 md:gap-2 mb-4">
      <GridItem 
        @place-piece="handlePiecePlacement" 
        v-for="item in currentGame.board" 
        :key="item.id" 
        :board-item="item"
        :class="{'pointer-events-none': props.currentGame.gameOver}"
        >
      </GridItem>
    </div>
    
    <div class="flex flex-col">
      <button class="btn mt-2" @click="$emit('show-score')">See current score</button>
      <button class="btn mt-2" @click="$emit('play-again')">Play again with same players</button>
      <ResetButton />
    </div>

  </div>
</template>
