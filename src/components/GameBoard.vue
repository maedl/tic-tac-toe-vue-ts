<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div  class="grid grid-cols-1 grid-rows-2 w-1/2 min-w-fit absolute top-6 right-0">
      <PlayerView v-for="player in activePlayers" :player="player" :key="player.playingPiece"></PlayerView>
    </div>

    <div>

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