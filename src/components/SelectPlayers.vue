<template>
  <div class="h-screen flex justify-center items-center">
    <PlayerInput @add-player="addPlayer" :playerCount="playerCount"></PlayerInput>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PlayerInput from './PlayerInput.vue';
import { Player, GamePiece } from '../models/Player';
import { getPlayersFromStorage, savePlayersToStorage } from '../functions/localStorage';

const emits = defineEmits<{ 
  (e: 'max-players') :void,
}> ();

const players = ref<Player[]>([]);
const playerCount = computed(() => players.value.length);

onMounted(() => {
 checkForActiveGame();
})

const addPlayer = (playerName: string) => {
  const piece = players.value.length === 0 ? GamePiece.X : GamePiece.O;

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
