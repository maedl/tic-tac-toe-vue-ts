<script setup lang="ts">
import PlayerInput from './PlayerInput.vue';
import { Player, GamePiece } from '../models/Player';
import InstructionsBox from './InstructionsBox.vue';

interface ISelectPlayerProps {
  players: Player[]
}

const props = defineProps<ISelectPlayerProps>();

const emits = defineEmits<{ 
  (e: 'add-player', players: Player[]) :void,
}> ();


const addPlayer = (playerName: string) => {
  const piece = props.players.length === 0 ? GamePiece.X : GamePiece.O;

  let newPlayersValue = [
    ...props.players,
    new Player(playerName, piece)
  ];
  
  emits('add-player', newPlayersValue)
  
}

</script>

<template>
  <div class="h-full flex flex-col items-center">
    <InstructionsBox />
    <PlayerInput @add-player="addPlayer"></PlayerInput>
  </div>
</template>
