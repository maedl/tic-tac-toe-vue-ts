<template>
<PlayerInput @add-player="addPlayer" :playerCount="playerCount"></PlayerInput>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PlayerInput from './PlayerInput.vue';
import { Player, playingPiece } from '../models/Player';

const emits = defineEmits<{ 
  (e: 'max-players') :void,
}> ();

const players = ref<Player[]>([]);
const playerCount = computed(() => players.value.length);

const addPlayer = (playerName: string) => {
  const piece = players.value.length === 0 ? playingPiece.X : playingPiece.O;

  players.value = [
    ...players.value,
    new Player(playerName, piece)
  ];
  
  if (players.value.length == 2) {
    return emits('max-players')
  }

}

</script>
