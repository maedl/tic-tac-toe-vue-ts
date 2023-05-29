<template>
  <div class="h-screen flex justify-center items-center">
    <PlayerInput @add-player="addPlayer" :playerCount="playerCount"></PlayerInput>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PlayerInput from './PlayerInput.vue';
import { Player, GamePiece } from '../models/Player';

const players = ref<Player[]>([]);
const playerCount = computed(() => players.value.length);

const props = defineProps();

const emits = defineEmits<{ 
  (e: 'max-players', players: Player[]) :void,
}> ();


const addPlayer = (playerName: string) => {
  const piece = players.value.length === 0 ? GamePiece.X : GamePiece.O;

  players.value = [
    ...players.value,
    new Player(playerName, piece)
  ];
  
  if (players.value.length == 2) {
    return emits('max-players', players.value)
  }

}

</script>
