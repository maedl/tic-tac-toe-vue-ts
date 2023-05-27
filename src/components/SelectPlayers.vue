<template>
<PlayerInput @add-player="addPlayer" :playerCount="playerCount"></PlayerInput>

</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PlayerInput from './PlayerInput.vue';
import { Player, playingPiece } from '../models/Player';
import { getPlayersFromStorage, savePlayersToStorage } from '../functions.ts/localStorage';

const emits = defineEmits<{ 
  (e: 'max-players') :void,
}> ();

const players = ref<Player[]>([]);
const playerCount = computed(() => players.value.length);

onMounted(() => {
 checkForActiveGame();
})

const addPlayer = (playerName: string) => {
  const piece = players.value.length === 0 ? playingPiece.X : playingPiece.O;

  players.value = [
    ...players.value,
    new Player(playerName, piece)
  ];
  
  if (players.value.length == 2) {
    savePlayersToStorage(players.value);
    return emits('max-players')
  }

}

const checkForActiveGame = () => {
  const storageCheck: Player[] | null = getPlayersFromStorage();

  if (storageCheck === null) {
    return;
  }
  else {
    players.value = storageCheck;
    return emits('max-players');
  }
  
  
}

</script>
