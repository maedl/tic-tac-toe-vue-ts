<template>
  <div>
    <div v-for="player in activePlayers"> {{ player.name + "|" + player.playingPiece }}</div>
    <button @click="clearStorage" class="btn">Clear storage</button>
  </div>
</template>

<script setup lang="ts">
import { clearPlayersFromStorage, getPlayersFromStorage } from '../functions/localStorage'
import { Player } from '../models/Player';

const activePlayers: Player[] | null = getPlayersFromStorage();

const clearStorage = () => {
  console.log('hallå')
  clearPlayersFromStorage();
}

</script>

<style lang="scss" scoped>

</style>