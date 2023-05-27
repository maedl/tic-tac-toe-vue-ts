<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div  class="flex flex-col justify-between w-1/2 min-w-fit">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.playingPiece"></PlayerView>
    </div>
    <button @click="clearStorage" class="btn mt-2">Clear storage</button>
  </div>
</template>

<script setup lang="ts">
import { clearPlayersFromStorage, getPlayersFromStorage } from '../functions/localStorage'
import { Player } from '../models/Player';
import PlayerView from './PlayerView.vue';

const activePlayers: Player[] | null = getPlayersFromStorage();

const clearStorage = () => {
  console.log('hallå')
  clearPlayersFromStorage();
}

</script>

<style lang="scss" scoped>

</style>